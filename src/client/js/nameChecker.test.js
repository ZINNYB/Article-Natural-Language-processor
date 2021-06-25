const { checkForName } = require("./checkForName");

test("Check if name is included", () => {
  expect(checkForName("Picard").tobe("Welcome, Captain!"));
});
