# glints-aries
Glints-aries UI-kit

[https://github.com/glints-dev/glints-aries](https://github.com/glints-dev/glints-aries)

### installation
```bash
npm install -S glints-aries
```

### usage

## Button
```javascript
import React from 'react';
import { Button } from 'glints-aries';

const MyComponent = () => {
  return(
    <Button variant="default">Im a button</Button>
  )
}

export default MyComponent;
```

### npm scripts
```bash
npm run storybook
```
then open your browser on port 9001

### development
all components lived on `src` folder. once you done adding component on `src` folder add it on `src/index.js` file
```javascript
export {default as Button} from './Button';
export {default as MyAwesomeComponent} from './MyAwesomeComponent';
export {Uikit as default, UikitConsumer, UikitProvider} from './Provider';
```

### Todos
- [ ] better documentation
