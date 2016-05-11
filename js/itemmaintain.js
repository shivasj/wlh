
var allData =[];

// Load the auction items
d3.csv("data/items.csv", function(data) {
    allData = data;

    buildGrid (allData);

});

/*
 * Build the Item table
 */
function buildGrid (data){
    var itemsContainer = d3.select("#items-container");

    itemsContainer.selectAll("tr").remove();

    var itemsRows = itemsContainer.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // Delete button
    itemsRows.append("td")
        .append("button")
        .attr("type","button")
        .attr("class","btn btn-sm btn-danger")
        .append("i")
        .attr("class","fa fa-trash-o");

    // Id
    itemsRows.append("td")
        .text(function(d){
            return d.id;
        });

    // Name
    itemsRows.append("td")
        .text(function(d){
            return d.name;
        });

    // Description
    itemsRows.append("td")
        .text(function(d){
            return d.description;
        });

    // Donor
    itemsRows.append("td")
        .text(function(d){
            return d.donor;
        });

    // Edit button
    itemsRows.append("td")
        .append("button")
        .attr("type","button")
        .attr("class","btn btn-sm btn-primary")
        .append("i")
        .attr("class","fa fa-pencil");
}

/*
 * Filter data based search input
 */
function search(val){
    var searchValue = $('#search').val().toLowerCase();
    //console.log(searchValue);
    var data = allData;
    data = data.filter(function(d){
        //console.log(d.name)
        return (d.name.toLowerCase().indexOf(searchValue) > -1) || (d.description.toLowerCase().indexOf(searchValue) > -1) || (d.donor.toLowerCase().indexOf(searchValue) > -1);
    });
    //console.log(data);

    buildGrid (data);
}
