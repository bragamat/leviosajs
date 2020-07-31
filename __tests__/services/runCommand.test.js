const { exec } = require('child_process')
const { runCommand } = require('../../services')

jest.mock('child_process', () => ({
  exec: jest.fn(comm => Promise.resolve(comm)),
}))
console.log = jest.fn()

describe('runCommand', () => {
  it('runs command passed as arguments', () => {
    const command = jest.fn()
    runCommand(command).then(data => {
      expect(data).toBe(command)
      expect(exec.getMockImplementation()).toHaveBeenCalledWith(data)
      expect(exec).toHaveBeenCalledTimes(1)
    })
  })
})
