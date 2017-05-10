var data = [4, 8, 15, 16, 23, 42, 84];

var width = 500,
    barHeight = 20;


var scale = d3.scaleLinear() //Escala el width de la barra al ancho del div    
    .range([0, width]); //ancho del div

var chart2 = d3.select("#ch2.chart")
    .attr("width", width);

//Load the data from tab-separated fields file.
d3.tsv("data/data.tsv", type, function(error, data2) {
    scale.domain([0, d3.max(data2, function(d) { return d.value; })]);

    chart2.attr("height", barHeight * data2.length);

    var bar = chart2.selectAll("div")
                .data(data2)
                .enter().append("g")
                .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) { return scale(d.value); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return scale(d.value) - 3; }) //style sirve para fijar attributos de HTML
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.name + " (" + d.value + ")"; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}