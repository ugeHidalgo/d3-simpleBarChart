var data = [4, 8, 15, 16, 23, 42, 84];
var randomData = [];

for (var i=0; i<10; i++) {
  randomData.push(Math.round(Math.random()*100));
}


/*d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', function(d) { return d*10 + 'px'; })
    .text(function(d) { return d; }); */

var scale = d3.scaleLinear() //Scala el width de la barra al ancho del div
    .domain([0, d3.max(data)]) 
    .range([0, 200]); //ancho del div

d3.select("body").append("p").text("Hello world"); //Add the <p> just before the closing </body>

d3.select("#ch1.chart")
  .selectAll("div")
  .data(data) //binds data to the selected DOM element
  .enter()
  .append("div")
  .style("width", function(d) { return scale(d) + "px"; })
  .text(function(d) { return d; });

d3.select("#ch2.chart")
  .selectAll("div")
  .data(randomData)  //Hace un loop sobre todos los elementos de data y para cada elemento d añade un div y le aplica el estilo y texto definidos.
  .enter()
  .append("div")
  .style("width", function(d) { return scale(d) + "px"; }) //style sirve para fijar valores de estilo (css)
  .style("background-color", function(d) { 
        if (d>75) {
          return "red"; 
        } else if (d<74 && d>26) {
          return "green"; 
        }   
      }) //style sirve para fijar valores de estilo (css)
  .text(function(d) { return d; });

