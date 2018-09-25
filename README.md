# Introduction
We proudly present to you Glints Aries made by Front End Engineers of Glints. It is a Frontend framework to simplify and speed up your development. This project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a ton of amazing components to be built.

## Installation
```bash
npm install -S glints-aries
```

## Basic usage
Import the component into your file.
```bash
import { ... } from 'glints-aries'
```

Before you start implementing the component, it's always a good start to always wrap your root component with <GlintsContainer />.
We created that Container to adapt with every screen sizes, so Users will always have best experience whenever they visit your site from their devices.
GlintsContainer also consists global style of glints-aries, so that it becomes a complement to the components.
For more details, you can read this at Utilities, then GlintsContainer section.
```bash
import { GlintsContainer } from 'glints-aries'

<GlintsContainer>
  <Component />
</GlintsContainer>
```

## Demo
[http://glints-aries.surge.sh](http://glints-aries.surge.sh)

## Development
```bash
yarn storybook
```
then open your browser on port 9001

## How to test local changes in glints-aries in your project
1. Open terminal in `glints-aries`
2. Run `yarn link`
3. Open terminal in your project
4. Run `yarn link glints-aries` 
5. Run `yarn build` in `glints-aries` when finish changes in `glints-aries` and want to test locally in your project
Run `yarn unlink glints-aries` and re-install `glints-aries` when you want to stop using local `glints-aries`

## What will be our doing next?
Here's the list of our next work:
1. Recategorizing components based on each functionalities, like base component and content component.
2. Replacing unclear interface, like size.
3. Always do alphabetically inside project, like importing file in index and icon.
4. Let the context determine the component display.
5. Improve accessibility.
6. Improve component abilities.
7. Removing unnecessary interface, like hoverColor, hoverTextColor, etc.
8. Rethink about which component should have children instead of component with props.
9. Change component name to be more understandable.
10. Always do a good semnatic versioning (major minor, patch).
