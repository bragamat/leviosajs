const { stateless } = require('../blueprints/ReactComponents')
const { setup } = require('./utils/stringifyComponent')

describe('Stateless Component', () => {
  it('should return only the content', () => {
    const name = 'Header'
    const content = 'This should be the only content being returned'
    const component = setup(stateless, (false, content))

    expect(component).toContain(content)
    expect(component).not.toContain(name)
    expect(component).not.toContain(`function ${name}() {`)
    expect(component).not.toContain(`export default ${name}`)
  })

  it('should match snapshot', () => {
    const name = 'Header'
    const component = setup(stateless, name)

    expect(component).toContain(`function ${name}() {`)
    expect(component).toContain(`export default ${name}`)
    expect(component).toMatchSnapshot()
  })
})
