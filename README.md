![leviosajs](https://img.shields.io/badge/leviosajs-1.2.51-yellowgreen) ![node](https://img.shields.io/badge/node-12.9.1-yellow) ![npm](https://img.shields.io/badge/npm-6.11.3-yellow)

![leviosa](https://pa1.narvii.com/6660/c238c33782e1318a08f7778b8890629121d458ac_hq.gif)
# It's LEVIOSA, not leviosaaah!

- This CLI helps you to bundle react components and aplications faster from the terminal. :rocket:
- Much like [create-react-app](https://github.com/facebook/create-react-app) but faster, simpler, lighter and with a few more helpers!

### Features and Technologies included
- [Hot Reload](https://github.com/gaearon/react-hot-loader) :rocket:
- [Styled-components](https://styled-components.com/) 💅
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) :sunglasses:
- [Jest](https://jestjs.io/) 📈

### HOW TO INSTALL

- `npm install --global leviosajs`

or using yarn

- `yarn global add leviosajs`


### Commands Available

- `leviosa-new` - Creates a react application :rocket:
- `leviosa-accio` - Creates a component :boom:
- `leviosa-start` - Starts the application :smiley:
- `leviosa-build` - Builds the applicaiton to production :sunglasses:
- `leviosa-test` - Runs our test suites :+1:

### HOW TO USE THEM
##### `leviosa-new`
- It receives an argument, what will be the name of the application. Let's say we want to create a reactjs application with the name _created-with-leviosajs_, All we have to do is:
`$ leviosa-new created-with-leviosajs`
It will bundle all the application and will open it on browser.
##### `leviosa-accio`
- It will ask for an input, what will be the name of the component we want to build. Let's say we want to create a new component named _Header_ within our already built reactjs application. Run the command:
`$ leviosa-accio header`
 and it will bundle a functional component named `Header` and its styles within `appName/src/components/Header/index.js` (Don't worry if you don't have the folder `components`, if non existent, it will be created automatically)
 _obs: you should be within your app's directory_
 ##### `leviosa-start`
 - This command will start our application. You can pass a `--production` flag and run the production build locally.

 ##### `leviosa-build`
 - It builds our application in **production mode**, so we can use it

##### `leviosa-test`
- It runs all our test suites
