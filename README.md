## Quickly access to the application:

1. `composer update`

2. Start the PHP's built-in Web Server
```
php bin/console server:start 0.0.0.0.:8000
```

3. Connect to `http://localhost:8000`

4. goto `http://localhost:8000/cologne`

Notes:
- The REST API endpoints which have been used here are hosted at http://api.myjson.com/bins/xs9xn(blog posts) and http://api.myjson.com/bins/97w3h(Products) . More infos in: `src/Symfony/ReactBundle/Resources/public/js/component/cologne.js` where you can switch to your REST endpoint and modify the template in the render() function.
- The prod JavaScript file used here is located in `web/dist/build.js` and configured in the `base.html.twig` template.
- The dev JavaScript is delivered from webpack dev server  


## Project Informations

- We use here:
	- webpack : see `package.json` and `webpack.config.json` and `webpack.dev-server.js`(launch dev server)

- launch dev Server:
	`npm run start`
- to build the prod js script in `web/dist`
	`npm run build`

### (optional) working with browser-sync-webpack-plugin:

- See configuration in `webpack.config.json`
- It will launch your default browser with: http://localhost:3001 and proxying connection to symfony application running on port:8000

### Ports Information
- http://localhost:8000 -> PHP's built-in Web Server
- http://localhost:3001 -> launched with webpack and compile component at saving time
- http://localhost:3002 -> BrowserSync
- http://localhost:3000/static/bundle.js -> Dev JS (npm run start)
- http://localhost:8000/web/dist/bundle.js -> Prod JS (npm run build)
