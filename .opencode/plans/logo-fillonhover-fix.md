# Fix Logo fillOnHover Prop Warning

## Problem
Console error: "React does not recognize the `fillOnHover` prop on a DOM element"

Root cause: `fillOnHover` is passed from Footer.jsx to Logo.jsx, but Logo spreads `...props` onto the `h2` element without consuming `fillOnHover`, causing it to leak to the DOM.

## Solution
Destructure `fillOnHover` from the component props so it doesn't get spread onto the DOM element.

### File: `src/components/Logo.jsx`

**Line 4:**
```jsx
// Before
const Logo = ({ invert, href, className, children, ...props }) => {

// After
const Logo = ({ invert, href, className, children, fillOnHover, ...props }) => {
```
