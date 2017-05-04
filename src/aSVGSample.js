var width = 100,
    height = 50,
    dataset = [ 25, 20, 15, 10, 5 ];


var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");

circles.attr("cx", function(d) { return 50; } )
       .attr("cy", function(d) { return 25; } )
       .attr("r", function(d) { return d; } )
       .attr("fill", "yellow")
       .attr("stroke", "orange")
       .attr("stroke-width", function(d, i) { return i; } ); // d es el valor, i es el indice empezando en 0.
