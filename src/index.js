function generateRecommendation(event) {
  event.preventDefault();

  new Typewriter("#recommendation", {
    strings: "book recommendation goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recommendationFormElement = document.querySelector("#recommendation");
recommendationFormElement.addEventListener("submit", generateRecommendation);
