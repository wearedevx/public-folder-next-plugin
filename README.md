# Public Folder Next Plugin

> A Nextjs plugin for serving static files at your root folder.
> Works with SSR and plain HTML exports.

## Usage

In `next.config.js`:

```js
const { withPublicFolderPlugin } = require('@wearedevx/public-folder-next-plugin')

module.exports = withPublicFolderPlugin(
  {
    // Config goes here
  })
)

```

