# Introduction
We proudly present to you Glints Aries made by Front End Engineers of Glints. It is a Frontend framework to simplify and speed up your development. This project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a ton of amazing components to be built.

## Installation
```bash
npm install -S glints-aries
```

## Usage
Import the component into your file and follow the instruction on the component section.
```bash
import { ... } from 'glints-aries'
```

Before you start using the components, it's better to always wrap your root component with <GlintsContainer/>.
We created that Container to adapt with every screen sizes, so Users will always have best experience whenever they visit your site from their devices.
GlintsContainer is also the global style for glints-aries component.
For more details, you can read this at Utilities, then GlintsContainer section.
```bash
import { GlintsContainer } from 'glints-aries'

<GlintsContainer>
  <Component />
</GlintsContainer>
```

## Demo
[http://glints-aries.surge.sh](http://glints-aries.surge.sh)

## npm scripts
```bash
yarn storybook
```
then open your browser on port 9001

## development
all components lived on `src` folder. once you done adding component on `src` folder include it on `src/index.js` file
