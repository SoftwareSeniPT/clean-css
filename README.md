# Clean-CSS
A tool to detect unused CSS on a website and return a clean CSS file.

## How to use.
Edit app.js to change some variables

```js
var files = [
  'http://staging-wp.softwareseni.co.id/',
  'http://staging-wp.softwareseni.co.id/our-work/',
  'http://staging-wp.softwareseni.co.id/what-we-do/',
  'http://staging-wp.softwareseni.co.id/who-we-are/',
  'http://staging-wp.softwareseni.co.id/contact-us/',
  'http://staging-wp.softwareseni.co.id/careers/',
  'http://staging-wp.softwareseni.co.id/portfolio/villalet/'
];

var options = {
  stylesheets: ['wp-content/themes/softwareseni/style.css']
};
```

`files` will be the list of HTML files or website URL to check. Usualy on the same domain.
`options` &gt; `stylesheets` will be the CSS file that want to be inspected.

Run `npm start` to start the cleaning process. Wait a while, the clean CSS file will be ready on `dist` folder.
