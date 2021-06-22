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
const formdata = document.getElementById("name").value;

async function userInput(url = "") {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ content: formdata }),
    redirect: "follow",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
        const newData = await res.json();
        console.log("response from /postData", newData);
        document.getElementById('results').innerHTML = newData.message
    } catch (error) {
        console.log("error", error);
    }
}

userInput("http://localhost:8081/valid");
export { handleSubmit };
