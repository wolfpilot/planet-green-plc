# Planet Green PLC

Personal portfolio website using Next JS, sprinkled with Framer Motion animations and other goodies.

## Table of contents

- [Intro](#intro)
- [Demo](#demo)
- [Design](#design)
- [Features (done)](#features-done)
- [Features (TBA)](#features-tba)
- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Resources](#resources)
- [License](#license)

## Intro

_It's our only home, we should probably take great care of it, right?_

Demo app for fictional sustainable energy provider, Planet Green.

My main focus with this project was creating a realistic, modern interface that suits this particular type of company. Forward-looking, friendly, informative, no BS.

## Demo

- Homepage: [https://planet-green-plc.vercel.app/](https://planet-green-plc.vercel.app/)
- Homepage w. debug grid: [https://planet-green-plc.vercel.app/?debugGrid=true](https://planet-green-plc.vercel.app/?debugGrid=true)

## Design

A big part of this exercise was making **a product that makes sense**. I didn't want to just slap together a bunch of stuff and call it a day.

So, what better to do than research your competition? I started by looking up some of the highest-rated sustainable energy providers: Tibber, Engie, Enel, among others. After drawing up a skeleton of the basic requirements such as subscription plans, the vision, a few words from the founder, it was time for the next big step: **branding**.

_And branding is, after all, what sells the product._

When it comes to **colours**, I wanted to keep it simple and elegant. There is a reason why blue is the topmost choice amongst any and all brands. Blue reminds us of the sky and the ocean. It is associated with calm, communication and reliability. This idea is further expanded upon by integrating shades of teal and purple in the logo, overlays and then again in the Dashboard (see image below).

Talking about the **logo**, it is synonymous with the mission of Planet Blue. A circle, symbolizing our planet. The overlapping waves fading away into a distant horizon make it easy to relate to water, wind, and even the sun itself as driving forces of sustainable energy. Scrolling down the Homepage, the branding is further reinforced by reusing the bottom part of the logo as dividers between various content sections.

The **font** was carefully chosen for its boldness and curvature, an aspect that can be found in many design elements such as the rounded corners in shapes of leaves which points to nature and sustainability.

**Animation** is kept consistent, fast and elastic. In fact, several shapes unfold from their rounded corners to straight-edged boxes or vice-versa. Content sections are lazy-loaded when in view, while the divider pushes out titles and subtitles in a smooth and playful fashion.

![screenshot](./docs/images/homepage.jpg)

## Features (done)

- Architecture

  - Next JS filename-based navigation

- State management

  - React Context

- UI & UX

  - Lazy-loaded content sections

- Accessibility

  - High contrast for easy reading
  - Clear typography
  - Fully-TAB navigable

- Config

  - Import path aliases using tsconfig-paths

- QOL (Quality of Life)

  - Debug visual grid
    - Add `debugGrid=true` param to any URL

## Features (TBA)

- [ ] Dashboard
  - [ ] Authentication
  - [ ] Graphs and charts
  - [ ] Billing and meter readings
  - [ ] Notifications

An (unfinished) design of the dashboard can be seen below.

![screenshot](./docs/images/dashboard.jpg)

## Technologies

- Languages
  - [TypeScript](https://www.typescriptlang.org/)
- Framework
  - [Next.js](https://nextjs.org/)
  - [React](https://react.dev/)
- Config
  - [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)
- Linting & formatting
  - [EsLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- State management
  - [Context](https://react.dev/reference/react/createContext)
- Testing
  - [Jest](https://jestjs.io/)
  - [Playwright](https://playwright.dev/)
- CI/CD
  - [Husky](https://www.npmjs.com/package/husky)
    - Pre-commit
    - Pre-push
  - [Vercel](https://vercel.com/)
    - Hosting static webapp

## Getting started

### Requirements

- [Yarn](https://yarnpkg.com/) (built on v1.22.22)

### Installation

```bash
$ git clone https://github.com/wolfpilot/planet-green-plc.git
$ cd planet-green-plc
$ yarn
```

### Steps

```bash
# 1. Run a local server instance
$ yarn dev
```

## Resources

### Credits

- Image credits go to [Unsplash](https://unsplash.com/)

## License

This project is licensed under the [MIT License](LICENSE).
