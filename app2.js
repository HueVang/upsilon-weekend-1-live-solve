// $(document).ready(function() {
//
// })

$(function() {
  console.log('jQuery is working!!')
  var totalMonthlySalary = 0;

  $('#employeesTable').on('click', '.deleteButton', function() {
    $(this).parent().parent().remove(); // could also use $(this).closest('tr').remove();
  });

  $('#newEmployeeForm').on('submit', function(event) {
    // console.log(event);
    event.preventDefault(); //stop the page from reloading and redirectiong
    console.log('Form has been submitted!!');

    var newEmployeeArray = $(this).serializeArray(); //get the information from the form
    //console.log(newEmployee);

    var newEmployeeObject = {};

    // Loop through all of the input properties in the array
    for(var i = 0; i < newEmployeeArray.length; i ++) {
      // console.log(newEmployeeArray[i]);
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      newEmployeeObject[inputFieldName] = inputFieldValue;
    }
    // Do not need semi-colon after "for" loops. Only for assignments and functions.
    console.log(newEmployeeObject);

    var newRow = $('<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.number + '</td>' +
      '<td>' + newEmployeeObject.title + '</td>' +
      '<td>' + newEmployeeObject.salary + '</td>' +
      '<td><button class="deleteButton">Delete</button><td>' +
    '</tr>');

    $('#employeesTable').append(newRow);

    $('#newEmployeeForm input[type="text"]').val('');
    $('#newEmployeeForm input[type="number"]').val('');

    // With new employee, divide salary by 12, add to current totalMonthlySalary.
    totalMonthlySalary += newEmployeeObject.salary / 12;
    console.log('totalMonthlySalary is ', totalMonthlySalary);

    $('#monthlySalary').text(totalMonthlySalary.toLocaleString("en-US", { style: "currency", currency: "USD"}));
  });
});
