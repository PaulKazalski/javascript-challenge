// Use d3 to create a bootstrap striped table
  // http://getbootstrap.com/docs/3.3/css/#tables-striped
    
  // Use D3 to select the table body
  var table_body = d3.select("tbody");
  // Append one table row `tr` to the table body
  var row = table_body.append("tr");
  var table1 = d3.select(".table");
  var textfield = d3.select("#text");

  var doc =  d3.select("tbody");

  var byDate = d3.selectAll("#byDate3");
  var byState = d3.selectAll("#byState3");
  var byCtry = d3.selectAll("#byCountry3");
  var byShape = d3.selectAll("#byShape3");


  // This function fills the rows of data
  function displayData (d, t) {
    d.forEach((sighting) => {
    var row1 = t.append("tr");
    row1.append("td").text(sighting.datetime);
    row1.append('td').text(sighting.city);
    row1.append('td').text(sighting.state);
    row1.append('td').text(sighting.country);
    row1.append('td').text(sighting.shape);
    row1.append('td').text(sighting.durationMinutes);
    row1.append('td').text(sighting.comments);
  })
  }

  // Initialize the page by displaying all data
  displayData (data, table_body);
  console.log("Preliminary Data.");
  
    
    byDate.on("click", function() {
      // Clear the original data
      doc.html("");
    
      var listItem = d3.select(this);
      var listItemText = listItem.text();
      console.log(listItemText);
      // Define a function that equates the New Text Entry to the date 
      function datesearch(data) {
        return data.datetime == listItemText;}
      // Define an array that is the result of filtering the original data
      var searcheddate = data.filter(datesearch);
      console.log(searcheddate);

      if (searcheddate.length == 0) {
            displayData (data, table_body);}
      else {displayData (searcheddate, table_body); }
    });

    byState.on("click", function() {
      // Clear the original data
      doc.html("");
    
      var listItem = d3.select(this);
      var listItemText = listItem.text();
      console.log(listItemText);
      // Define a function that equates the New Text Entry to the date 
      function statesearch(data) {
        return data.state == listItemText;}
      // Define an array that is the result of filtering the original data
      var searchedstate = data.filter(statesearch);
      console.log(searchedstate);

      if (searchedstate.length == 0) {
            displayData (data, table_body);}
      else {displayData (searchedstate, table_body); }
    });

    byCtry.on("click", function() {
      // Clear the original data
      doc.html("");
    
      var listItem = d3.select(this);
      var listItemText = listItem.text();
      console.log(listItemText);
      // Define a function that equates the New Text Entry to the date 
      function countrysearch(data) {
        return data.country == listItemText;}
      // Define an array that is the result of filtering the original data
      var searchedcountry = data.filter(countrysearch);
      console.log(searchedcountry);

      if (searchedcountry.length == 0) {
            displayData (data, table_body);}
      else {displayData (searchedcountry, table_body); }
    });

    byShape.on("click", function() {
      // Clear the original data
      doc.html("");
    
      var listItem = d3.select(this);
      var listItemText = listItem.text();
      console.log(listItemText);
      // Define a function that equates the New Text Entry to the date 
      function shapesearch(data) {
        return data.shape == listItemText;}
      // Define an array that is the result of filtering the original data
      var searchedshape = data.filter(shapesearch);
      console.log(searchedshape);

      if (searchedshape.length == 0) {
            displayData (data, table_body);}
      else {displayData (searchedshape, table_body); }
    });














// // Array of student names
// var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// // This function will be called for each element in the array
// function printName(name) {
//   console.log(name);
// }

// // Loop through each student name and call the printName function
// for (var i = 0; i < students.length; i++) {
//   printName(students[i]);
// }

// // `forEach` automatically iterates (loops) through each item and
// // calls the supplied function for that item.
// // This is equivalent to the for loop above.
// students.forEach(printName);

// // You can also define an anonymous function inline
// students.forEach(function(name) {
//   console.log(name);
// });



// // ****
//   // COUNTRY PACKAGE
//   // ****
//   function countryarray(d) {
//     countries = [];
//     d.forEach((s) => {
//       if (countries.includes(s.country) == false){
//         countries.push(s.country) }
//     })
//   }
//   countryarray(data);
//   console.log(countries);

//   // ****
//   // STATE PACKAGE
//   // ****
//   function statearray(d) {
//     states = [];
//     d.forEach((s) => {
//       if (states.includes(s.state) == false){
//         states.push(s.state) }
//     })
//   }
//   statearray(data);
//   console.log(states);

//   // ****
//   // CITY PACKAGE
//   // ****
//   function cityarray(d) {
//     cities = [];
//     d.forEach((s) => {
//       if (cities.includes(s.cities) == false){
//         cities.push(s.city) }
//     })
//   }
//   cityarray(data);
//   console.log(cities);

//   // ****
//   // SHAPE PACKAGE
//   // ****
//   function shapearray(d) {
//     shapes = [];
//     d.forEach((s) => {
//       if (shapes.includes(s.shape) == false){
//         shapes.push(s.shape) }
//     })
//   }
//   shapearray(data);
//   console.log(shapes);
