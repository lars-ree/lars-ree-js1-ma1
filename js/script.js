const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meaow");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

var paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

var results = document.querySelector(".results");

results.innerHTML = "This is a new paragraph";
results.style.backgroundColor = "yellow";

// Question 7

function lists(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

lists(cats);

// Question 8

let catsHtml = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";
    if (cats[i].age !== undefined) {
      age = cats[i].age;
    }

    catsHtml += `<div>
      <h5>${cats[i].name}</h5>
      <p>${age}</p>
      </div>`;
  }

  return catsHtml;
}

const createHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = createHtml;
