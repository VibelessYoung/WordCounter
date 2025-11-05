/* DATA */

const txtareaEL = document.querySelector(".txt");

const numOfwords = document.querySelector(".word-number");

const numOftwitter = document.querySelector(".twitter-number");

const numOffacebook = document.querySelector(".facebook-number");

/* FUNCTIONS */

txtareaEL.addEventListener("input", function () {
  const numOfcaracters = txtareaEL.value.length;
  const twitterCaracters = 280 - numOfcaracters;
  const facebookCaracters = 2200 - numOfcaracters;
  let numOfwordsEL = txtareaEL.value.split(" ").length;
  const numOfcaractersEL = document.querySelector(".state-number");
  if (twitterCaracters < 0) {
    numOftwitter.style.color = "red";
  } else {
    numOftwitter.style.color = "black";
  }
  if (facebookCaracters < 0) {
    numOffacebook.style.color = "red";
  } else {
    numOffacebook.style.color = "black";
  }
  if (txtareaEL.value.length === 0) {
    numOfwordsEL = 0;
  }
  if (txtareaEL.value.includes("<script>")) {
    alert("DONT USE OF SCRIPT I SEE YOU !");
    txtareaEL.value = txtareaEL.value.replace("<script>", "");
  }
  numOfcaractersEL.textContent = numOfcaracters;
  numOftwitter.textContent = twitterCaracters;
  numOffacebook.textContent = facebookCaracters;
  numOfwords.textContent = numOfwordsEL;
});
