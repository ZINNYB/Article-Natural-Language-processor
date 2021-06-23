function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

// form data
const formdata = document.getElementById("name").value;
async function userInput(url = "") {
  await fetch("http://localhost:8081/valid"
  , {
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
    const newData = await res.json()
    .then(res => {
      document.getElementById('score_tag').innerHTML = `score_tag: $(res.score_tag)`;
      document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
  });  } catch (error) {
    console.log("error", error);
  }
}
}
export { handleSubmit };
