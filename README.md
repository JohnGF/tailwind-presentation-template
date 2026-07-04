# 📊 Tailwind CSS Presentation Template

A beautiful, responsive, and standalone HTML slideshow engine styled with **Tailwind CSS**. It is designed as a modern, code-first alternative to rigid LaTeX Beamer templates, Figma layouts, or traditional PowerPoint presentations.

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

## 🚀 How to Use

1. **Clone or Download:** Copy this folder.
2. **Open in Browser:** Double-click `index.html` to open it locally.
3. **Customize Slides:** Open `index.html` in your favorite code editor and scroll to the bottom where `const slides` is defined. Update the HTML structures in the array.
4. **Customize Speaker Notes:** Edit the `const speakerScripts` array to write matching presenter text for each slide (HTML tag support included).

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
