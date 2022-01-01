//just declaring the my initial row will be null
var selectedRow = null

function onFormSubmit() {
    //I`m using this if else statement to tell my program that if row is empty, nothing will be added
    //in case the submit button is pressed, Otherwise the form will be updated.
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    //Defining a variable formData, where we gonna access the values of the elements by ID.
    var formData = {};
    formData["Nationality"] = document.getElementById("Nationality").value;
    formData["age"] = document.getElementById("age").value;
    formData["dream"] = document.getElementById("dream").value;
    formData["NoCountry"] = document.getElementById("NoCountry").value;
    return formData;
}

function insertNewRecord(data) {
    //In this function I`m basically getting the information from my first table and inserting into
    //my second table.
    var table = document.getElementById("BucketList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nationality;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dream;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.NoCountry;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML =
    //I`m adding an event onclick, so in this way I wanna my function 'onEdit' to happen
    //when the button is clicked, and I did pretty much the same for the 'onDelete'function
    `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    //Once the values has been submited I wanted my fields to be empty, in order to add
    //more information. 
    document.getElementById("Nationality").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dream").value = "";
    document.getElementById("NoCountry").value = "";
    selectedRow = null;
}