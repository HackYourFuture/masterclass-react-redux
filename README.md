# Getting started with a React application

What we'll be using:

- Babel to convert ES2015 JSX files to ES5 files
- Webpack to create a single JS file for the browser
- Webpack dev server to load our web page

To create this project template from scratch:

```bash
# Install system-wide prerequisites
npm install -g yarn webpack webpack-dev-server

# Create an app directory
mkdir react-app
cd react-app

# Initialize the app directory
npm init
yarn

# Add required development packages
yarn add -D babel-core babel-preset-react babel-loader

# Add required runtime packages
yarn add react

# Create .babelrc file (just copy-paste this line)
echo -e "{\n  \"presets\": [\"react\"]\n}" >.babelrc

# To view the created file:
cat .babelrc

# Create webpack.config.js
# I created a Gist for this at https://gist.githubusercontent.com/joostlubach/30955f971560c06bf77f759442b3515f/raw/194a87ec4732b1b8dc1f482956f2334213b08fcc/webpack.config.js
# Either download it and save it as webpack.config.js in your directory, or if you have wget, type:
wget https://gist.githubusercontent.com/joostlubach/30955f971560c06bf77f759442b3515f/raw/194a87ec4732b1b8dc1f482956f2334213b08fcc/webpack.config.js

# To view the created file:
cat webpack.config.js

# Create an empty src and build directory
mkdir src build

# Create an empty index.js file
echo '' >src/index.js
```

- Now create an `index.html` page inside the build directory:

```
<!doctype html>

<html>
  <head>
    <title>React example</title>
  </head>

  <body>
    <main></main>
    <script type="text/javascript" src="./bundle.js"></script>
    <script src="/webpack-dev-server.js"></script>
  </body>
</html>
```

- Finally, start up your web server!

```bash
webpack-dev-server --content-base build --inline
```