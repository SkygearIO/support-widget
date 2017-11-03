# Skygear Support Widget
## Build
1. `$ export WIDGET_HOST="<< host url >>"`
2. `$ npm install`
3. `$ npm run build`
4. All files are in the `build` directory

## Usage
Add one line of html before `</body>`, that's it!
`<script src="<< host url >>/build/embed.js" async></script>`

## Test locally
1. `$ export WIDGET_HOST="./build"`
2. `$ npm install`
3. `$ npm run build`
4. `php -S localhost:8000` or any command to create a dev web server
5. open `http://localhost:8000/test.html` on your browser