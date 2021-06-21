import { validate } from "webpack";

function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });
}
// const nameValue = document.getElementById("name").value;
// // form data
// const formdata = new FormData();
// formdata.append("txt", `${nameValue}`);

// async function validate(url = "") {
//   await fetch(url, {
//     method: "POST",
//     body: formdata,
//     redirect: "follow",
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: formdata,
//   });
// }
// validate("http://localhost:8081/valid");
export { handleSubmit };
