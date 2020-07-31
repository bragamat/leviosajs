const fs = require('fs')
const { writeInFile } = require('../../services')

jest.mock('fs', () => ({
  writeFile: jest.fn((fileName, content) =>
    Promise.resolve(fileName, content),
  ),
}))
console.log = jest.fn()

describe('writeInFile', () => {
  it('writes file as passed', () => {
    const fileName = 'some_text.txt'
    const content = 'this is an example for testing'

    writeInFile(fileName, content).then(result => {
      expect(fileName).toBe(result.fileName)
      expect(content).toBe(result.content)
      expect(fs.writeFile).toHaveBeenCalledTimes(1)
      expect(fs.writeFile).toHaveBeenCalledWith(
        fileName,
        content,
        () => {},
      )
    })
  })
})
