var topData =[];

// Load the auction items
d3.csv("data/items.csv", function(data) {
    //console.log(data);

    topData = data;

    topData = topData.filter(function(d){
        return (d.id == "4" || d.id == "5" || d.id == "10" || d.id == "13" || d.id == "14" );
    });

    //console.log(topData);
    buildItems (topData);


});

/*
 * Build the Item panels
 */
function buildItems(data) {

    var itemsContainer = d3.select("#top-items");

    var itemRows = itemsContainer.selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class","row top-row");

    // Image
    itemRows.append("div")
        .attr("class","col-md-3")
        .append("img")
        .attr("class","img-responsive img-center")
        .attr("alt","")
        .attr("src",function(d){
            return "img/items/Item_"+ d.id+".jpg";
        });
    //Description
    itemRows.append("div")
        .attr("class","col-md-9 top-items")
        .append("p")
        .text(function(d){
            return d.description;
        });



}
