import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test.describe('Presentation Slides', () => {
  let htmlFilePath = `file://${path.resolve(process.cwd(), 'index.html')}`;

  test.beforeEach(async ({ page }) => {
    await page.goto(htmlFilePath);
  });

  test('should display first slide correctly', async ({ page }) => {
    await expect(page.locator('#slide-num-current')).toHaveText('1');
    await expect(page.locator('#slide-section')).toHaveText('1. Overview');
    await expect(page.locator('#slide-container h1')).toContainText('Tailwind CSS Slides');
  });

  test('should navigate to next slide via button', async ({ page }) => {
    const nextBtn = page.locator('#btn-next');
    await expect(nextBtn).toBeEnabled();
    await nextBtn.click();
    await expect(page.locator('#slide-num-current')).toHaveText('2');
    await expect(page.locator('#slide-section')).toHaveText('2. Why Code Slides?');
  });

  test('should navigate to previous slide via button', async ({ page }) => {
    // first go next
    await page.locator('#btn-next').click();
    await expect(page.locator('#slide-num-current')).toHaveText('2');
    
    // then go prev
    const prevBtn = page.locator('#btn-prev');
    await expect(prevBtn).toBeEnabled();
    await prevBtn.click();
    await expect(page.locator('#slide-num-current')).toHaveText('1');
  });

  test('should navigate slides using keyboard shortcuts (Arrow keys & Space)', async ({ page }) => {
    // Keyboard Right Arrow
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#slide-num-current')).toHaveText('2');
    
    // Keyboard Left Arrow
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('#slide-num-current')).toHaveText('1');

    // Spacebar
    await page.keyboard.press('Space');
    await expect(page.locator('#slide-num-current')).toHaveText('2');
  });

  test('should have disabled previous button on first slide and next button on last slide', async ({ page }) => {
    const prevBtn = page.locator('#btn-prev');
    await expect(prevBtn).toBeDisabled();

    // Move to slide 2
    await page.locator('#btn-next').click();
    // Move to slide 3
    await page.locator('#btn-next').click();
    
    await expect(page.locator('#slide-num-current')).toHaveText('3');
    const nextBtn = page.locator('#btn-next');
    await expect(nextBtn).toBeDisabled();
  });

  test('should toggle dark/light theme correctly', async ({ page }) => {
    const htmlTag = page.locator('html');
    await expect(htmlTag).toHaveClass(/dark/); // Default is dark in the html
    
    const themeBtn = page.locator('#theme-toggle');
    await themeBtn.click();
    await expect(htmlTag).not.toHaveClass(/dark/);
    
    await themeBtn.click();
    await expect(htmlTag).toHaveClass(/dark/);
  });

  test('should toggle presenter notes view', async ({ page }) => {
    const notesPanel = page.locator('#notes-panel');
    const btnNotes = page.locator('#btn-notes');

    // Default hidden (not fully unrendered, but hidden class)
    await expect(notesPanel).toHaveClass(/hidden/);
    
    // Click notes button to toggle
    await btnNotes.click();
    await expect(notesPanel).not.toHaveClass(/hidden/);
    await expect(notesPanel).toBeVisible();
    
    // Check if notes text appears
    const notesContent = page.locator('#notes-content');
    await expect(notesContent).toContainText('Welcome to your new Tailwind CSS Slides template!');

    // Close notes panel via close button
    const closeNotesBtn = page.locator('#close-notes-btn');
    await closeNotesBtn.click();
    
    // Notes panel takes 300ms to hide fully due to timeout in code, but class translate-x-full is added immediately.
    // We wait for hidden class.
    await expect(notesPanel).toHaveClass(/hidden/);
  });

  test('should maintain responsive layout on smaller screens', async ({ page }) => {
    // Set to mobile dimensions
    await page.setViewportSize({ width: 375, height: 812 });

    // Header items should still be accessible
    const headerTitle = page.locator('header h1');
    await expect(headerTitle).toBeVisible();
    await expect(headerTitle).toHaveText('Slides Engine');

    // Theme toggle button should remain visible
    const themeBtn = page.locator('#theme-toggle');
    await expect(themeBtn).toBeVisible();

    // The slide content container should take up remaining space
    const slideContainer = page.locator('#slide-container');
    const box = await slideContainer.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThan(375); // Accounting for margins/padding

    // Set back to desktop to ensure notes panel doesn't interfere incorrectly
    await page.setViewportSize({ width: 1280, height: 720 });
    
    const notesPanel = page.locator('#notes-panel');
    await expect(notesPanel).toHaveClass(/hidden/);
  });
});