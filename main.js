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

const hireData = [
  {
    title: "Offer Management",
    text: "Streamline your offer process with custom offer templates, approval flows, and built-in eSignatures. Get offers out to candidates as quickly as possible, so you can keep up with your hiring goals.",
    img: "https://assets-global.website-files.com/6127d83f257132e4fe0bddc6/621cf254e8ae4fb706887c68_breezyhr-offer-management.jpg",
  },
  {
    title: "Background Screening",
    text: "Get pre-employment screening done in days, not weeks. With integrations from top providers, Breezy makes it fast and easy to run background checks you can trust.",
    img: "https://assets-global.website-files.com/6127d83f257132e4fe0bddc6/621cf296c2a0dc0d7a51c902_breezyhr-background-screening-p-800.jpeg",
  },
  {
    title: "HRIS Integration",
    text: "Breezy integrates with the most popular tools in recruiting and HR. That means you can easily move new hires into the HR system that works for you.",
    img: "https://assets-global.website-files.com/6127d83f257132e4fe0bddc6/642f03526a398cc5374850e1_breezyhr-HRIS-integrations-p-800.jpg",
  },
  {
    title: "Compliance",
    text: "Our suite of tools and features help automate and simplify the process of staying General Data Protection Regulation (GDPR) compliant.",
    img: "https://assets-global.website-files.com/6127d83f257132e4fe0bddc6/621cf2e8d3876c6c53895ffa_breezyhr-compliance-p-800.jpeg",
  },
];

const listDetails = document.getElementById("listDetails");
const list = document.getElementsByClassName("section3-li-items");
Array.from(list).forEach((li, i) => {
  li.addEventListener("click", () => addListDetails(i));
  li.addEventListener("click", addStyleTocurrentList);
});
function addStyleTocurrentList(e) {
  Array.from(list).forEach((li) => {
    li.classList.remove("selected-list");
  });
  e.target.classList.add("selected-list");
}
function addListDetails(id) {
  while (listDetails.firstChild) {
    listDetails.removeChild(listDetails.firstChild);
  }
  const data = hireData[id];
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
  h2.classList.add("section3-sub-title");
  p.classList.add("section3-sub-text");
  img.classList.add("section3-sub-img");
  h2.textContent = data.title;
  p.textContent = data.text;
  img.src = data.img;
  img.alt = "picture";
  listDetails.appendChild(h2);
  listDetails.appendChild(p);
  listDetails.appendChild(img);
}
