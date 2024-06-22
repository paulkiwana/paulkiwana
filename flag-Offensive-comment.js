const badWords = ["meanie", "grump", "bully", "hater"];
const checkMessage = (sentence) => {
  const comment = sentence.toLowerCase();
  let isBadWordFound = false;
  for (const word of comment.split(" ")) {
    if (badWords.includes(word)) {
      isBadWordFound = true;
      break;
    }
  }
  if (isBadWordFound) {
    console.log("Warning: potentially harmful language detected");
  } else {
    console.log("No potentially harmful language detected");
  }
};
checkMessage("hey you ");