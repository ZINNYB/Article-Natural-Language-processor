async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let formValid = document.getElementById("name");
  let form = document.getElementById("form");
  const errorElement = document.getElementById("error");

  // form validation
  form.addEventListener("submit", (e) => {
    let message = [];
    if (formValid.value === "" || formValid == null) {
      messages.push('"Url is required"');
    }
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(",");
    }
  });
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/valid", {
    method: "POST",
    body: JSON.stringify({ content: formText }),
    redirect: "follow",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (res) {
      // const newData = await res.json();
      console.log("response from /postData", res);
      document.getElementById(
        "score_tag"
      ).innerHTML = `score_tag: ${res.scoreTag}`;
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        "sensitivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
}
export { handleSubmit };
