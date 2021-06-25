const { formText } = require("./formHandler");
test("formText should be able to get value from Form field.", () => {
  const textInput = function () {
    return (document.body.innerHTML = document.body.innerHTML =
      "<div>" +
      '<input id="text" type="text" name="input" value="Text Inside" placeholder="Text">'(
        "</div>"
      ));
  };
  expect(textInput.tobe("Text Inside"));
});
