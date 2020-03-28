![leviosajs](https://img.shields.io/badge/leviosajs-1.2.48-yellowgreen) ![node](https://img.shields.io/badge/node-12.9.1-yellow) ![npm](https://img.shields.io/badge/npm-6.11.3-yellow)

![leviosa](https://pa1.narvii.com/6660/c238c33782e1318a08f7778b8890629121d458ac_hq.gif)
# It's LEVIOSA, not leviosaaah!

- This CLI helps you to bundle react components and aplications faster from the terminal. :rocket:
- Much like [create-react-app](https://github.com/facebook/create-react-app) but faster, simpler, lighter and with a few more helpers!

### HOW TO INSTALL

- `npm install --global leviosajs`

or using yarn

- `yarn global add leviosajs`


### Commands Available

- `leviosa-new` - Creates a react application :rocket:
- `leviosa-accio` - Creates a component :boom:
- `leviosa-start` - Starts the application :smiley:
- `leviosa-build` - Builds the applicaiton to production :sunglasses:

### HOW TO USE THEM
##### `leviosa-new`
- It receives an argument, what will be the name of the application. Let's say we want to create a reactjs application with the name _created-with-leviosajs_, All we have to do is:
`$ leviosa-new created-with-leviosajs`
It will bundle all the application and open it on browser.
##### `leviosa-accio`
- It will ask for an input, what will be the name of the component we want to build. Let's say we want to create a new component named _Header_ within our already built reactjs application. Run the commando
`$ leviosa-accio`
 and the following question will popup on your terminal:
![](./images/accioCli.png)
We type in _header_ and it will be created at _src/components/Header/index.js_

