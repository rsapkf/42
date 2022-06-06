---
id: css
title: CSS
---

## System font stack

```css
body {
  /* GitHub */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  /* An alternative */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
}
```

## Add ellipsis to overflowing text

```css
.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## Center a webpage

```html
<body>
  <div id="page-wrap">
    <!-- all websites HTML here -->
  </div>
</body>
```

```css
#page-wrap {
  width: 800px;
  margin: 0 auto;
}
```

## Make an image responsive

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Indicate PDF links

This adds the text `(PDF)` after PDF links in the document:

```css
a[href$=".pdf"]:after {
  content: "(PDF)";
}

/* Use data-size attribute if provided */
/* Adds `(PDF, <data-size>)` */
a[href$=".pdf"][data-size]:after {
  content: "(PDF, " attr(data-size) ")";
}
```

## Common breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Misc

- `position: sticky` doesn't work if `overflow` of parent is set.
