var data = [4, 8, 15, 16, 23, 42, 84];
var data2 = [12, 38, 55, 1, 34, 22, 44];

var width = 420,
    barHeight = 20;


var scale = d3.scaleLinear() //Escala el width de la barra al ancho del div
    .domain([0, d3.max(data)]) 
    .range([0, width]); //ancho del div

var chart2 = d3.select("#ch2.chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart2.selectAll("div")
    .data(data2)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", scale)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return scale(d) - 3; }) //style sirve para fijar attributos de HTML
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });