interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Miles",
  lastName: "Morales",
  age: 23,
  location: "Texas"
};

const student2: Student = {
  firstName: "Peter",
  lastName: "Parker",
  age: 25,
  location: "New York"
};

const studentList: Student[] = [student1, student2];

function renderTableContent() {
  const table = document.createElement('table');
  for (const student of studentList) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.innerHTML = student.firstName;
    const cell2 = row.insertCell();
    cell2.innerHTML = student.location;
  }
  document.body.appendChild(table);
}

renderTableContent();
