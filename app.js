var cleanCSS = require('./utils/cleanCSS');

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

cleanCSS({
  files,
  options,
  dir: 'dist/style.css',
  onSave: function() {
    console.log('New clean stylesheet created');
  }
});
