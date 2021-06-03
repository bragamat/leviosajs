const { reactIndex } = require('../blueprints/ReactComponents')
const { setup } = require('./utils/stringifyComponent')
const jestConfig = require('../blueprints/jestConfig')

describe('Snapshots', () => {
  it('appDir/index.js', () => {
    const component = setup(reactIndex)

    expect(component).toContain('import App from')
    expect(component).toContain('ReactDOM.render')
    expect(component).toMatchSnapshot()
  })

  it('appDir/jest.config.js', () => {
    const component = setup(jestConfig)

    expect(component).toContain('verbose: true')
    expect(component).toContain('__DEV__: true')
    expect(component).toMatchSnapshot()
  })
})
