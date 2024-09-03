
# highlight.js theme selector

This project demonstrates a method to make different themes of highlight.js to coexist on the same page by scoping each theme to a particular component by prefixing CSS files with the name of the theme.

The page is split up to two parts: dark and light, and each theme is displayed on both sides.

This presentation allows choosing a theme best matching required background, whether it be for a light-themed or dark-themed site.

The idea is simple:
> - By default, the CSS theme stylesheet contains standard class names, which are supposed to be applied globally on the whole page.
> - Instead, we preprocess each theme such that each class name is prefixed by the theme name
> - Using such prefixed stylesheet one can easily apply the highlighting theme on a predefined component only, having the class name corresponding to such theme

We transform this CSS
```css
.hljs {
  background: #fefefe;
  color: #545454
}
```
by this
```css
.hljs-theme-a11y-light .hljs {
  background: #fefefe;
  color: #545454
}
```

The full article is available here:
[Highlight your code: scope highlight.js theme to a single component](https://epanikas.hashnode.dev/highlight-your-code-scope-highlightjs-theme-to-a-single-component)

The demo page is available here: [highlight.js theme selector](https://nextjs-tailwind-highlight-js-theme-selector.vercel.app/)

## Usage 

### Generating prefixed themes

the script to generate the prefixed CSS themes

```shell
npm run highlight.js-prefix
```

### Using the highlighting component

```jsx
<CodeComp language={"java"} code={codeSample} hljsTheme={theme}/>
```