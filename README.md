# Coffee roasting timer

<p align="center">
<a href="https://jacobcarpenter.github.io/roast-timer/">
  <img src=".github/assets/sample-image.png?raw=true" width="180">
</a>
</p>

https://jacobcarpenter.github.io/roast-timer/

A work-in-progress special-purpose timer for logging heat adjustments and roast events during a coffee roast.

I don't have any fancy equipment for home roasting coffee; I just do it in a pan on the stove. With one hand stirring continuously, it's hard to keep accurate records for a roast—important for repeatability and refinement!

The [roast-timer](https://jacobcarpenter.github.io/roast-timer/) is intended to be a simple solution for data recording during roasting.

It's meant to be used on a mobile device—namely, _my_ phone 😅—and isn't really designed for a full desktop experience.

## Technology

This project is also a sandbox for experimenting with various technologies.

[Vite.js](https://vitejs.dev/) + React, using Vite's React template. So far, my experience with Vite has been _very_ enjoyable. Five stars. ⭐️⭐️⭐️⭐️⭐️

[Theme-ui](https://theme-ui.com/) for styling (css-in-js). Great DX with the main library. I don't think the theme presets are totally awesome yet.

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/). Big shout out for [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) too. Not sure why that doesn't come by default when you init an eslint project with react.

✅ Github actions workflow to build every commit.

Publishing every commit to Github Pages with the [Deploy to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages) action! 💯

## Local development

1. Clone the repo
2. `yarn`
3. `yarn dev`
