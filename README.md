# Introduction

We proudly present to you Glints Aries created by the front-end engineers of Glints. It is a front-end framework to simplify and speed up your development. This project is built with React and Styled Components. We are still actively developing this project day by day and there are still a ton of amazing components to be built.

### Installation

```bash
npm install -S glints-aries
```

### Basic usage

Before you start implementing the component, it's always a good idea to wrap your root component with `<GlintsContainer />`.
We created that Container to adapt with every screen size, so users will always have the best experience regardless of the device they use.
For more details, you can read this at Utilities, then GlintsContainer section.

```js
import { GlintsContainer } from 'glints-aries';

<GlintsContainer>
  <Component />
</GlintsContainer>;
```

### Demo

[http://aries.glints.design/](http://aries.glints.design/)

### Development

```bash
yarn storybook
```

then open your browser on port 9001

### How to test local changes in glints-aries in your project

1. Open terminal in `glints-aries`.
2. Run `yarn link`.
3. Open terminal in your project.
4. Run `yarn link glints-aries`.
5. Run `yarn build` in `glints-aries` when finish changes and want to test locally in your project.

Run `yarn unlink glints-aries` and re-install `glints-aries` when you want to stop using local `glints-aries`

### Code structure in glints-aries

1. Always do alphabetically when importing file.
2. Put file on proper folder based on each respective uses.
3. Use 2 Indent Spaces and Tab on the code.
4. Follow this import structure for your code
   - First: always import **React** library at first.
   - Second: third-party.
   - Third: glints-aries component.
   - Fourth: glints-aries utilities.
   - Fifth: styling.

```js
import * as React from 'react'; // React

import classNames from 'classnames'; // Third-party
import PropTypes from 'prop-types'; // Third-party

import Modal from '../../Display/Modal'; // Glints Aries component

import { escEvent } from '../../Utils/DomUtils'; // Glints Aries utilities

import { Container, ModalBackground, ModalArea } from '../../Style/ModalStyle'; // Styling
```

Always give line break between different section when importing.

5. Follow this code structure for your code
   - First: Constructor / State
   - Second: Local Function
   - Third: React life cycle
   - Forth: Render
6. Always do line break whenever your import or variable is so long.
   You can do it like this but you can do it in another format as long as it can be legible and not long.

```js
const { type, children, className, ...defaultProps } = this.props;
```

### Code Procedure

1. Use Color library instead of writing hex codes.

```js
background-color: #EC272B; // Wrong
background-color: ${PrimaryColor.glintsred}; // Right
```

2. Use ScreenSize instead of writing pixel size number.

```js
@media (min-width: 640px) { ... } // Wrong
@media (min-width: ${ScreenSize.mobileL}px) { ... } //Right
```

3. Naming convention for styled-components.

Use the component name followed by the role of that style.

```bash
CheckboxContainer
1. Name: Checkbox
2. Role: Container

JobcardImageWrapper
1. Name: Jobcard
2. Role: ImageWrapper
```

4. Avoid offering styling props on a component.

```js
<Collapsible onHoverColor="#FAFAFA" /> // Wrong
```

5. Minimize the number of elements inside a Component

```js
// Wrong
<div className="container">
  <div className="wrapper">
    <div>
      <h1>This is Heading</h1>
    </div>
  </div>
</div>
```

6. Fix eslint/react warnings before pushing your code.

# What is Component?

A standalone piece of software that has a clear boundary that is accessible via an API and contains all of the application dependencies.

### Why we need a component-based design system?

1. Create consistent experience throughout our UI.
2. Component accelerates development.

### What we need to prepare for constructing a design system?

1. Identify company culture/ mission
2. Base Color
3. Type scale
4. Border radius (rounding corner or sharp corner)
5. Spacing scale (line-height)
6. Letter spacing
7. Shadow (how our shadow look like on every component)

**Creating and maintaining a consistent UI and UX across every part of our product.**
It helps users intuitively navigate and successfully interact with different sections of your applications without confusion. It also creates sense of branding.

If you design a component, you should pay attention to

1. Functional Consistency
2. Visual Consistency

### What defines a great component?

1. Interface defines the component so component should respect the context. It means that Interface should be able to work in any possible context.
2. Interface should have clear usability.
3. Component should be flexible but still consistent.
4. Only support functional interaction, not style.
5. Great component supports accessibility.

### How can we improve glints-aries?

1. Always leave room for component to be flexible but still consistent.
2. Component size should be flexible in every environment.
3. Glints Aries’s interface should be able handle any possibilities.
4. The name of the component must be easy to understand and clear based on the usage.
5. Differentiate between component that should have children and self-closing tag.
6. Improve accessibility.
7. Always checking your code whether it's having clash with existing code.
   - Do manual test.
   - Remove all warnings and errors before push it to Github.

# More about Glints Aries

Find out more about the following topics in our wiki:

- [Contributing](https://github.com/glints-dev/glints-aries/wiki/Contributing)
- [Roadmap](https://github.com/glints-dev/glints-aries/wiki/Roadmap)
- [Testing](https://github.com/glints-dev/glints-aries/wiki/Testing)
