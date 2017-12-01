## Quickly access to the application:

1/Start the php server
	bin/console server:start

2/connect to 
	http://localhost:8000

3/GoTo 
	http://localhost:8000/cologne

Note: The REST API endpoint used here is hosted at http://api.myjson.com/bins/xs9xn . More infos in: `src/Symfony/ReactBundle/Resources/public/js/component/cologne.js` where you can change to your endpoint and modify the template in the render() function.


Note: the finally js file used here is located in `web/dist/build.js` and configured in the base twig template.


## Project Informations	

- We are using here:
	- webpack : see `package.json` and `webpack.config.json` and `webpack.dev-server.js`(launch dev server)

- launch dev Server:
	`npm run start`
- to build the prod js script in `web/dist`
	`npm run build`

###(optional) working with browser-sync-webpack-plugin:
	See configuration in `webpack.config.json`
	this will launch the browser with: http://localhost:3001 and connect to symfony instance when runing using port:8001


- http://localhost:8001 -> symfony server launching with : bin/console server:start
- http://localhost:3001 -> launched with webpack and compile component at saving time
- http://localhost:3002 -> the BrowserSync instance with more information
- http://localhost:3000/static/bundle.js  : the dev js script (npm run start)
- http://localhost:8001/web/dist/bundle.js : the prod js script (npm run build)


Note:

In dev mode we are running webpackserver and using `http://localhost:3001` for react script to refresh quickly the browser.

When runing the symfony php server we use the `http://localhost:8000` to work with symfony but we stil use the JS refreshed by webpackserver. In prod mode we use then the `web/dist/bundle.js` . More information in `src/Symfony/ReactBundle/Resources/views/base.html.twig`. The dev JS script in this demo is using dist/bundle.js
