# Ulyana Digital Lab

A small static portfolio site designed for GitHub Pages. It uses plain HTML, CSS, and JavaScript; there is no build step.

## Before publishing

1. Update project names and descriptions in `index.html` as each concept develops.
2. Replace each visual placeholder with your own image. Put image files in the repository (for example, an `images` folder), then replace the placeholder artwork in each `.project-visual` with an image such as `<img src="images/my-project.jpg" alt="Description of the project">`.
3. The contact section currently publishes `dikevich97@gmail.com`. Change both the visible text and the `mailto:` link if you want to use another address.
4. Edit the About text and page description to match you. The art direction is editable in `style.css`.

The named tarot character and postcard entries describe planned projects; add your own finished images and details as they develop. The hero artwork and project visuals are CSS demonstrations; replace them with your own work when ready.

## Publish with GitHub's website

1. Sign in at [github.com](https://github.com) and choose **New repository** from the plus menu.
2. Name it `ulyana-digital-lab` (or another name). For a free GitHub Pages site, make the repository **Public**. Select **Add a README file**, then create the repository.
3. Open the repository and choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` (plus your image folder when you add images). Keep `index.html` at the repository's top level.
5. Enter a commit message such as `Add portfolio site` and select **Commit changes**.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select branch `main` and folder `/(root)`, then select **Save**.
7. Wait a few minutes, then revisit **Settings → Pages**. GitHub will show the published address, usually `https://YOUR-USERNAME.github.io/ulyana-digital-lab/`.

## Update the site later

1. In the repository, open the file you want to change and select the pencil icon, or choose **Add file → Upload files** to replace files or add images.
2. Make your edits. For images, use a repository-relative path such as `images/model.jpg` in `index.html`.
3. Select **Commit changes**. GitHub Pages publishes the update automatically, usually within a few minutes.

## Check locally

Open `index.html` in a browser. Navigation links jump to page sections; category buttons filter the sample cards. No server or package installation is required.
