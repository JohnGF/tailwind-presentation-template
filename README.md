# 📊 Tailwind CSS Presentation Template

![Tailwind Slides Cover Placeholder](https://via.placeholder.com/1200x600/0F172A/3B82F6?text=Tailwind+CSS+Presentation+Template)

A beautiful, responsive, and standalone HTML slideshow engine styled with **Tailwind CSS**. Designed as a modern, code-first alternative to rigid LaTeX Beamer templates, Figma layouts, or traditional PowerPoint presentations.

Live-sync **Presenter Split-Screen** speaker notes out of the box!

---

## ✨ Features

- **Zero Build Setup:** It is a single, self-contained `index.html` file. No npm installs or build scripts needed. Open it in a browser and present.
- **Presenter View (Split-Screen):** Click the **Notes** button in the header. It opens a clean, separate window displaying your presenter scripts with a large, readable font.
- **Bi-directional Controls:** Advancing slides (via arrow keys or spacebar) inside **either** the slide tab or the notes window synchronizes both windows automatically.
- **Fully Responsive & Dark Mode:** Built with Tailwind CSS, supporting responsive columns and seamless toggling between light and dark themes.
- **Git Version Control Friendly:** Your slides and notes are plain HTML strings in a JavaScript array. Track changes, review edits, and collaborate using standard Git workflows.
- **Easy Deployment:** Commit to GitHub and host instantly via **GitHub Pages**.

---

## 🎨 Slide Layout Guide & Custom Tailwind Styling

The template is fully powered by Tailwind CSS. You can leverage the extensive utility classes provided by Tailwind to create customized, beautiful slide layouts. 

### Slide Structure

Slides are defined in the `const slides` array at the bottom of the `index.html` file. Each slide object requires a `section` string for the footer and an `html` string for the content:

```javascript
const slides = [
  {
    section: "1. Overview",
    html: `
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-4xl font-bold text-slate-800 dark:text-white">Your Slide Title</h1>
        <p class="text-gray-500 mt-4">Your slide content goes here.</p>
      </div>
    `
  },
  // ... more slides
];
```

### Custom Theme Colors

The template is configured with a few custom Tailwind colors out of the box that you can use across your slides:

- `text-oxfordblue` / `bg-oxfordblue`: `#0A192F`
- `text-fculblue` / `bg-fculblue`: `#3b82f6`
- `text-fculgreen` / `bg-fculgreen`: `#10b981`
- `text-tured` / `bg-tured`: `#ef4444`

You can customize these by updating the `tailwind.config` script block in the `<head>` of `index.html`.

---

## 🚀 Quickstart Commands

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd tailwind-slide-template
   ```
2. **Open in Browser:** Double-click `index.html` to open it locally, or use a local server:
   ```bash
   npx serve .
   ```
3. **Customize Slides:** Open `index.html` in your code editor and edit `const slides` and `const speakerScripts` arrays.

---

## ⌨️ Keyboard Shortcuts

- **Advance Slide:** `Right Arrow` or `Spacebar` (works in both slide & notes screens).
- **Previous Slide:** `Left Arrow` (works in both slide & notes screens).
- **Toggle Presenter Notes:** Press `n` or click the **Notes** button in the header.

---

## 🌍 Publishing to GitHub Pages

1. Create a new GitHub repository (e.g. `tailwind-presentation-template`).
2. Run the following commands in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. On GitHub, go to your repository's **Settings > Pages**.
4. Under **Build and deployment**, select **Deploy from a branch** and set it to `main` branch, `/ (root)` folder.
5. Save, and your slide deck is live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`!

---

License: MIT. Go ahead and farm those clones! 🚀