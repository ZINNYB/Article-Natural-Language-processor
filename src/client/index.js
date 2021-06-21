import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

// importing sass files to the index folder
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");
const name = document.querySelector("#name").value;

export { checkForName, handleSubmit };
