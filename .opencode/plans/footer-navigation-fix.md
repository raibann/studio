# Fix FooterNavigation Duplicate Key Error

## Problem
Console error: "Encountered two children with the same key, `AH MANA3RAF`"

Root cause: Three navigation links in `src/constants/index.jsx:7-9` share the same title `"AH MANA3RAF"`, causing duplicate keys when `key={link.title}` is used in `src/components/FooterNavigation.jsx:15`.

## Solution
Change the `key` prop from `link.title` to use the `index` parameter instead, ensuring uniqueness.

### File: `src/components/FooterNavigation.jsx`

**Line 14-15:**
```jsx
// Before
{item.links.map((link) => (
  <li key={link.title} className="mt-4">

// After
{item.links.map((link, index) => (
  <li key={index} className="mt-4">
```
