import { checkForName } from "../src/client/js/nameChecker";
describe("Check if name is included", () => {
  test("Testing the handleSubmit() function", () => {
    expect(checkForName).toBeDefined();
  });
});
