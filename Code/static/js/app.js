// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);


// Use d3 to update each cell's text with ufo values 
tableData.forEach(function(ufo) {
  console.log(ufo);
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value   
    var cell = row.append("td");
    cell.text(value);
  });
});

//////////////////////////////////////////////////////////

//Add filter 

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  tbody.html("");
   
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputElement);
  
    
  var filteredData = tableData.filter(date => date.datetime === inputValue);


  filteredData.forEach(function(ufo) {
    console.log(ufo);
    
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value   
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

  console.log(inputValue);
  console.log(tableData);
  
  console.log(filteredData);

};



