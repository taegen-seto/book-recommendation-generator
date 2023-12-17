function displayRecommendation(response) {
  new Typewriter("#recommendation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecommendation(event) {
  event.preventDefault();
  let userRequest = document.querySelector("#user-request");
  let apiKey = "384310c338bfe3o7f06caedc66df497t";
  let prompt = `User Request: please recommend a book similar to but not the same as ${userRequest.value}`;
  let context =
    "You are an expert in books and you follow book trends on social media and goodreads. You love to make clear and concise book recommendations. Please recommend a book to read based on the user instructions. Please do not include reasoning for your decision. Please do not include a heading, only provide a book title and its author";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recommendationFormElement = document.querySelector("#recommendation");

  axios.get(apiUrl).then(displayRecommendation);
}

let requestFormElement = document.querySelector("#request-form");
requestFormElement.addEventListener("submit", generateRecommendation);
