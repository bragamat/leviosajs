![leviosajs](https://img.shields.io/badge/leviosajs-1.2.51-yellowgreen) ![node](https://img.shields.io/badge/node-12.9.1-yellow) ![npm](https://img.shields.io/badge/npm-6.11.3-yellow)

![leviosa](https://pa1.narvii.com/6660/c238c33782e1318a08f7778b8890629121d458ac_hq.gif)
# It's LEVIOSA, not leviosaaah!

- leviosa(CLI) helps you to bundle react components and aplications faster from the terminal. :rocket:
- leciosa works like [create-react-app](https://github.com/facebook/create-react-app) but faster, simpler, lighter and with a few more helpers!

### Features and Technologies included
- [Hot Reload](https://github.com/gaearon/react-hot-loader) :rocket:
- [Styled-components](https://styled-components.com/) 💅
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) :sunglasses:
- [Jest](https://jestjs.io/) 📈

### Installation

```
npm install --global leviosajs
```

or using yarn

```
yarn global add leviosajs
```

### Commands

- `leviosa-new` - Creates a react application :rocket:
- `leviosa-accio` - Creates a component :boom:
- `leviosa-start` - Starts the application :smiley:
- `leviosa-build` - Builds the applicaiton to production :sunglasses:
- `leviosa-test` - Runs our test suites :+1:

### Command Usage
#### `leviosa-new <application-name>`
- It recieves the name of the application as an argument. Then it bundles all the application and opens it in the browser. 

Example :
- Let's say we want to create a reactjs application with the name _created-with-leviosajs_. All we have to do is:
```
$ leviosa-new created-with-leviosajs
```

#### `leviosa-accio <component-name>`
- It recieves the name of the component as an argument.  It bundels a functional component named `Header` and its styles it in `appName/src/components/Header/index.js` (Don't worry if you don't have the folder `components`, if the folder does not exists it will be created automatically)
 _obs: you should be within your app's directory_

Example : 
- Let's say we want to create a new component named _Header_ within our already built reactjs application. Run the command:
```
$ leviosa-accio header
```
 
#### `leviosa-start`
 - It will start the application. You can pass a `--production` flag and run the production build locally.

#### `leviosa-build`
 - It builds the application in **production mode** so it can be used

#### `leviosa-test`
- It runs all our test suites
