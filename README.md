install
```javascript
npm i
// or
yarn
```

run dev server
```javascript
npm run dev
// or
yarn dev
```

build for production
```javascript
npm run build
// or
yarn build
```

serve production build
```javascript
npm run serve
// or
yarn serve
```

The static js/css should be at the public folder
they can be accessed from index.html like this: (vite will know to look in public folder)
```html
<script src="/main.js"></script>
<link rel="stylesheet" href="/main.css">
```

the html is loaded with a the fetch api, then transformed to text, then sanitized with DOMPurify, only then it is injected into the DOM via the react component using dangerouslySetInnerHTML