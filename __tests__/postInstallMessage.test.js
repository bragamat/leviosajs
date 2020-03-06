const runConsoleMessages = require("../helpers/postInstallMessage");

describe("PostInstall", () => {
  it("Should run the post intall messages", () => {
    console.log = jest.fn();
    console.clear = jest.fn();
    runConsoleMessages();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.clear).toHaveBeenCalledTimes(1);
  });
});
