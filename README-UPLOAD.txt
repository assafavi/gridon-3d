GRIDON 3D — GitHub Pages folder-layout icon fix

This package matches the repository layout:

  /index.html
  /v1/index.html
  /v2/index.html

UPLOAD INSTRUCTIONS

1. Open the gridon-3d repository on GitHub.
2. Choose Add file > Upload files.
3. Drag the CONTENTS of this package into the repository root.
4. Preserve the v1 and v2 folders. Allow index.html files to be replaced.
5. Commit the upload and wait for the Pages deployment to finish.

Do not upload the ZIP itself.

After deployment, verify these URLs in Safari:

https://assafavi.github.io/gridon-3d/apple-touch-icon.png
https://assafavi.github.io/gridon-3d/manifest.webmanifest

Then remove the old Home Screen shortcut, reopen:

https://assafavi.github.io/gridon-3d/?icon=3

Refresh once, choose Share > Add to Home Screen, and enable Open as Web App.

The cache-busting query value ?v=3 is included so Safari requests the new icon.
