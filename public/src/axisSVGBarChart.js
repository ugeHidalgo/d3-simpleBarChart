var width = 300,
    height = 400;
    barHeight = 20;

var scaleY = d3.scaleLinear() //Escala el width de la barra al alto del div    
    .range([height, 0]); //alto del div

var chart = d3.select("#ch1.chart")
    .attr("height", height)
    .attr("width", width);

//Load the data from tab-separated fields file.
d3.tsv("data/data.tsv", type, function(error, data) {
    scaleY.domain([0, d3.max(data, function(d) { return d.value; })]); //Fija el domain del scale una vez conocidos los datos necesarios.

    barWidth = width / data.length; //El ancho de la barra

    var bar = chart.selectAll("div")
                .data(data)
                .enter().append("g")
                .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; }); //Desplazamiento de la barra hacia la derecha

    bar.append("rect")
        .attr("y", function(d) { return scaleY(d.value); })
        .attr("height", function(d) { return height - scaleY(d.value); }) //Para darle la vuelta a la barra ya que el 0,0 es el top left.
        .attr("width", barWidth - 1);

    bar.append("text")
        .attr("x", barWidth / 2 ) //x left 
        .attr("y", function(d) { return scaleY(d.value) + 3; }) //y bottom
        //.attr("dx", "-.15em")
        .attr("dy", ".75em")
        .attr("text-anchor", "middle")
        .attr("transform", function(d,i) { return "rotate(-90, " + i * barHeight + ","+ i * barHeight +")"} )
        .text(function(d) { return d.name + " (" + d.value + ")"; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}