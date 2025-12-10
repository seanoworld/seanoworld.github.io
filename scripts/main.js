const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/santa.png") {
    myImage.setAttribute("src", "images/santa2.png");
  } else {
    myImage.setAttribute("src", "images/santa.png");
  }
});
