 // Use d3 to create a bootstrap striped table
  // http://getbootstrap.com/docs/3.3/css/#tables-striped
    
  // Use D3 to select the table body
  var table_body = d3.select("tbody");
  // Append one table row `tr` to the table body
  var row = table_body.append("tr");
  var table1 = d3.select(".table")
    .attr("class", "table table-striped");
  var textfield = d3.select("#text");
  var byDate = d3.selectAll("#byDate3");


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

  displayData (data, table_body);
  console.log("Preliminary Data.");
  
  var doc =  d3.select("tbody");
  var alert = d3.select(".alert");

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
      displayData (data, table_body);
    }
    else {
      displayData (searcheddate, table_body); 
    }
  });
  
