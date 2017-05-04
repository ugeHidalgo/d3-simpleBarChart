var data = [4, 8, 15, 16, 23, 42, 84];
var data2 = [12, 38, 55, 1, 34, 22, 44];

/*d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', function(d) { return d*10 + 'px'; })
    .text(function(d) { return d; }); */

var scale = d3.scaleLinear() //Scala el width de la barra al ancho del div
    .domain([0, d3.max(data)]) 
    .range([0, 200]); //ancho del div

d3.select("#ch1.chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return scale(d) + "px"; })
    .text(function(d) { return d; });

d3.select("#ch2.chart")
  .selectAll("div")
    .data(data2)
  .enter().append("div")
    .style("width", function(d) { return scale(d) + "px"; })
    .text(function(d) { return d; });

