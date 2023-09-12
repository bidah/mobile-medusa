<h1 align="center">
  📱 Mobile Medusa
</h1>
<h2 align="center">
React Native Medusa.js Starter Template
</h2>

<p align="center">
Combine Medusa's modules for your commerce backend with the latest Expo features for a mobile storefront that matches Medusa Next.js starter functionality, look and feel.</p>

<p align="center">
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Medusa Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=bidah">
    <img src="https://img.shields.io/twitter/follow/bidah.svg?label=Follow%20@bidah" alt="Follow @bidah" />
  </a>
</p>

<p style="text-align:center; display: block;">
<img src="https://i.imgur.com/wDiJG6b.png" width="100%" />
</p>

> [!IMPORTANT]
> This is an alpha version not ready for production yet. It's missing mainly the production payment provider configuration that will be available on the beta version. To stay up to date follow [Bidah](https://twitter.com/intent/follow?screen_name=bidah) on X / Twitter for latests updates.

### Prerequisites

To use the starter you should have:

- Medusa server running locally on port 9000.

### Core libraries documentation

- Check out [Medusa Docs](https://docs.medusajs.com) for more details and troubleshooting about Medusa.

- Check out [Expo docs](https://https://docs.expo.dev/) for more details and troubleshooting Expo.

# Overview

The Mobile Medusa Next.js Starter is built with:

- [Medusa](https://medusajs.com/)
- [Expo](https://expo.dev/)
- [Expo-router](https://docs.expo.dev/routing/introduction/)
- [Nativewind](https://nativewind.dev)
- [Gorhom/react-native-bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [Stacks Layouts](https://mobily.github.io/stacks/)
- [Typescript](https://www.typescriptlang.org/)

Features include:

- Full ecommerce support that has parity of screens with [Medusa Next.js Starter](https://github.com/medusajs/nextjs-starter-medusa):

  - Product Detail
  - Product Overview
  - Login
  - Register
  - Product Collections
  - Cart
  - User Account
    - Profile
    - Addresses
    - Orders
  - Order Details
  - Order Confirmation

  **All logic and user flows through the app are working with the Medusa Backend**

# Quickstart

### Medusa Backend configuration

> [!NOTE]
> You need to have a Medusa Backend to be linked to mobile storefront

Set your `MEDUSA_BACKEND_URL` var present in `/lib/config.ts`

```js
let MEDUSA_BACKEND_URL = 'http://localhost:9000'
```

### Install dependencies

Use Yarn to install all dependencies.

```shell
yarn
```

### Start developing

You are now ready to start up your project.

```shell
yarn start
```

### Builds with Expo EAS builds

EAS Build allows you to build a ready-to-submit binary of your app for the Google Play Store or Apple App Store.

<https://docs.expo.dev/build/setup/>

# [Universal Medusa](http://dub.sh/universalmedusa)

If you want to kickstart a Medusa project with web (Next.js) and mobile (Expo) in a integrated setup for cross platform development come visit us at [Universal Medusa Docs](http://dub.sh/universalmedusa)

# [Next.js Starter Medusa](https://github.com/medusajs/nextjs-starter-medusa)

A performant e-commerce starter template with Next.js 13 and Medusa.

# Screens

<kbd>
<p style="text-align:center; display: block;">
<img src="https://i.imgur.com/koZ19oy.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/F8lsOr2.png" width="32%" style="border:1px solid black" />

<img src="https://i.imgur.com/zFwFDLb.png" width="32%" style="border:1px solid black" />
</p>

<p style="text-align:center; display: block;">
<img src="https://i.imgur.com/8xoVkMH.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/GqIfXIK.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/6d9e3Qk.png" width="32%" style="border:1px solid black" />
</p>
<p style="text-align:center; display: block;">
<img src="https://i.imgur.com/CsIAxNY.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/l9s4qfI.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/rhVbMOE.png" width="32%" style="border:1px solid black" />
</p>
<p style="text-align:center; display: block;">
<img src="https://i.imgur.com/qNUY8dk.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/HQpKVeA.png" width="32%" style="border:1px solid black" />
<img src="https://i.imgur.com/jwJ4aRP.png" width="32%" style="border:1px solid black" />
</p>

</kbd>

# About Author

### Rodrigo Figueroa

Follow Rodrigo Figueroa, creator of `Mobile Medusa` and `Universal Medusa`, on Twitter: [@bidah](https://twitter.com/bidah)
