const url = "assignments.json";
const cards = document.querySelector('#card');

async function getAssignments() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayAssignments(data.week01);
  }
  
  getAssignments();


  function displayAssignments(week01) {

    //create html elements
    const name = document.createElement("p");
    const link = document.createElement("p");

    //create links
    name.innerHTML = `<span>${week01.name} </span>`;
  }

  displayAssignments();