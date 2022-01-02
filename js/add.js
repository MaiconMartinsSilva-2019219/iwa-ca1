//just declaring the my initial row will be null
var selectedRow = null

function SubmitForm() {
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
//This function will read the data
function readFormData() {
    //Defining a variable formData, where we gonna access the values of the elements by ID.
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["age"] = document.getElementById("age").value;
    formData["nationality"] = document.getElementById("nationality").value;
    formData["dream"] = document.getElementById("dream").value;
    return formData;
}

function insertNewRecord(data) {
    //In this function I`m basically getting the information from my first table and inserting into
    //my second table.
    var table = document.getElementById("BucketList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    //in the cell position '0' I want add the data that was typed in the 'Name' field'
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;

    //in the cell position '1' I want add the data that was typed in the 'age' field'
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;

    //in the cell position '2' I want add the data that was typed in the 'nationality' field'
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nationality;

    //in the cell position '3' I want add the data that was typed in the 'dream field'
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dream;

    //in the cell position '4' I want add the buttons 'Edit'and 'Delete'
    cell4 = newRow.insertCell(4);
    cell4.innerHTML =
        //I`m adding an event onclick, so in this way I wanna my function 'Edit' to happen
        //when the button is clicked, and I did pretty much the same for the 'onDelete'function
        `<a onClick="Edit(this)">Edit</a>
                       <a onClick="Delete(this)">Delete</a>`;
}

function resetForm() {
    //Once the values has been submited I wanted my fields to be empty, in order to add
    //more information. 
    document.getElementById("Name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("dream").value = "";
    selectedRow = null;
}