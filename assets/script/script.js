// EXS 5th November 2020 - edwyn.saunders@outlook.com

var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
       var formData = readFormData();
        if (selectedRow === null) { 
            insertNewRecords(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
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

function resetForm () {
    document.getElementById("empFullName").value="";
    document.getElementById("empNumber").value="";
    document.getElementById("empSalary").value="";
    document.getElementById("empLocation").value="";
    selectedRow = null;
}

function validate() {
    isValid=true;
    if (document.getElementById("empFullName").value === "") {
        isValid=false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid=true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) {
            document.getElementById("fullNameValidationError").classList.add("hide");
        }
    }
    return isValid;
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
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a><a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empFullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empSalary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("empLocation").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empFullName;
    selectedRow.cells[1].innerHTML = formData.empNumber;
    selectedRow.cells[2].innerHTML = formData.empSalary;
    selectedRow.cells[3].innerHTML = formData.empLocation;
}

function onDelete(td) {
    if (confirm('Sure you wish to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
