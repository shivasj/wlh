var allData =[];

// Load the auction items
d3.csv("data/items.csv", function(data) {
    //console.log(data);

    allData = data;

    buildItems (allData);


});

/*
 * Build the Item panels
 */
function buildItems(data){

    var itemsContainer = d3.select("#items-container");

    itemsContainer.selectAll("div").remove();

    var itemsRow = itemsContainer.append("div")
        .attr("class","row");

    var column1 = itemsRow.append("div")
        .attr("class","col-md-4");
    var column2 = itemsRow.append("div")
        .attr("class","col-md-4");
    var column3 = itemsRow.append("div")
        .attr("class","col-md-4");

    var data1 =[];
    var data2 =[];
    var data3 =[];
    for(var i=0;i<data.length;i++){
        data1.push(data[i]);
        if(i+1 < data.length) {
            i++;
            data2.push(data[i]);
        }
        if(i+1 < data.length) {
            i++;
            data3.push(data[i]);
        }
    }
    //console.log(data1);
    //console.log(data2);
    //console.log(data3);

    buildColumns(column1,data1);
    buildColumns(column2,data2);
    buildColumns(column3,data3);


    function buildColumns(column,dt){
        var items = column.selectAll("div")
            .data(dt)
            .enter()
            .append("div")
            .attr("class","panel panel-default");

        // Item Header
        var itemsHeader = items.append("div")
            .attr("class","panel-heading")
            .text(function(d){
                return d.name;
            });
        // Item Body
        var itemsBody = items.append("div")
            .attr("class","panel-body panel-body-items");

        itemsBody.append("img")
            .attr("class","img-responsive img-center")
            .attr("src",function(d){
                return "img/items/Item_"+ d.id+".jpg";
            });

        itemsBody.append("p")
            .attr("class","item-description")
            .text(function(d){
                return d.description;
            });

        itemsBody.append("p")
            .attr("class","item-donor")
            .text(function(d){
                return "Donor: "+d.donor;
            });
    }
}

/*
 * Filter data based search input
 */
function search(val){
    var searchValue = $('#search').val().toLowerCase();

    var data = allData;
    data = data.filter(function(d){

        return (d.name.toLowerCase().indexOf(searchValue) > -1) || (d.description.toLowerCase().indexOf(searchValue) > -1) || (d.donor.toLowerCase().indexOf(searchValue) > -1);
    });


    buildItems (data);
}