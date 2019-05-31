# Introduction
We proudly present to you Glints Aries made by Front End Engineers of Glints. It is a Frontend framework to simplify and speed up your development. This project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a ton of amazing components to be built.

### Installation
```bash
npm install -S glints-aries
```

### Basic usage
Import the component into your file.
```bash
import { ... } from 'glints-aries'
```

Before you start implementing the component, it's always a good start to always wrap your root component with `<GlintsContainer />`.
We created that Container to adapt with every screen sizes, so Users will always have best experience whenever they visit your site from their devices.
GlintsContainer also consists global style of glints-aries, so that it becomes a complement to the components.
For more details, you can read this at Utilities, then GlintsContainer section.
```bash
import { GlintsContainer } from 'glints-aries'

<GlintsContainer>
  <Component />
</GlintsContainer>
```

### Demo
[http://glints-aries.surge.sh](http://glints-aries.surge.sh)

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
```bash
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
```bash
const {
  type,
  children,
  className,
  ...defaultProps
 } = this.props;
```

### Code procedure in glints-aries
1. Use Color library instead of writing hex color.
```bash
background-color: #EC272B; // Wrong
background-color: ${PrimaryColor.glintsred}; // Right
```

2. Use Device Size instead of writing pixel size number.
```bash
@media (max-width: 600px) { ... } // Wrong
@media ${Device.mobileL} { ... } //Right
```

3. For styling always use the component name followed by the role of that style.
```bash
CheckboxContainer
1. Checkbox is name of the component.
2. Container is outer part of the component.

JobcardImageWrapper
1. Jobcard is name of the component.
2. ImageWrapper is wrapper of the image inside Job Card.
```

4. Don’t offer styling props on component.
```bash
<Collapsible onHoverColor="#FAFAFA" /> // Wrong
```

5. Most of the time use **em** and **rem**, but still can use **px** for fixed dimension.
6. Don't create to many element nodes inside the Component. Always do it in a simple way.
```bash
  // Wrong
  <div className="container">
    <div className="wrapper">
      <div>
        <h1>This is Heading</h1>
      </div>
    </div>
  </div>
```

7. Use proper naming for interface, like isOpen or onClose.
8. Always fix eslint before push your code.

# What is Component?
A standalone piece of software that has a clear boundary that is accessible via an API and contains all of the application dependencies.

### Why we need component-based design system?
1. Create consistent experience wherever they’re used through reusability.
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

# Glints Aries Roadmap
1. Using ThemeProvider for distributing color.
2. Doing Accessibility Testing in storybook.
3. Doing Component Testing.
4. Trying Knobs.
5. Updating styled-component v4.
