const allDivs = document.getElementsByClassName("add-img");
console.log(allDivs);
Array.from(allDivs).forEach((tag) => {
  tag.addEventListener("mouseover", addStyle);
});
Array.from(allDivs).forEach((tag) => {
  tag.addEventListener("mouseleave", removeStyle);
});
function addStyle(e) {
  let children = e.target.querySelectorAll("*");
  let firstChild = children[0];
  let secondChild = children[1];
  let thirdChild = children[2];
  if (firstChild) {
    firstChild.style.position = "static";
    firstChild.style.fontSize = "1rem";
    firstChild.style.color = "white";
  }
  if (secondChild) {
    secondChild.style.display = "block";
    secondChild.style.color = "orange";
  }

  if (thirdChild) {
    thirdChild.style.display = "block";
  }
}
function removeStyle(e) {
  let children = e.target.querySelectorAll("*");
  let firstChild = children[0];
  let secondChild = children[1];
  let thirdChild = children[2];
  if (firstChild) {
    firstChild.style.position = "absolute";
    firstChild.style.fontSize = "2rem";
    firstChild.style.color = "orange";
  }
  if (secondChild) {
    secondChild.style.display = "none";
  }

  if (thirdChild) {
    thirdChild.style.display = "none";
  }
}
window.addEventListener("scroll", () => {
  const back = document.getElementById("background");

  let value = window.scrollY;
  if (value > 1420) {
    back.style.background = "#373738";
    let opacity = (value - 1420) / 1000; // Adjust the divisor to control the speed of opacity change
    back.style.opacity = opacity > 1 ? 1 : opacity;
  } else {
    back.style.background = "#f1f2ee";
    back.style.opacity = "1";
  }
});
