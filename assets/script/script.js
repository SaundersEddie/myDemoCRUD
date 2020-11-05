// EXS 5th November 2020 - edwyn.saunders@outlook.com

function onFormSubmit() {
    var formData = readFormData();
    insertNewRecords(formData);
}

function readFormData() {
    var formData={};
    formData["empFullName"] = document.getElementById("empFullName").value;
    formData["empNumber"] = document.getElementById("empNumber").value;
    formData["empSalary"] = document.getElementById("empSalary").value;
    formData["empLocation"] = document.getElementById("empLocation").value;
    console.log (`FormData: ${formData}`);
    return formData;
}

// CRUD Operations
function insertNewRecords(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empFullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.empSalary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.empLocation;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a><a>Delete</a>`;
}

