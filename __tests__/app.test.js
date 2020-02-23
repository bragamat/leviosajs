const { app } = require("../blueprints/ReactComponents");
const { setup } = require("./utils/stringifyComponent");

describe("Snapshots", () => {
  it("appDir/index.js", () => {
    const component = setup(app);

    expect(component).toContain("<GlobalStyles />");
    expect(component).toContain("/src/App.js");
    expect(component).toContain("export default App");
    expect(app()).toMatchSnapshot();
  });
});
