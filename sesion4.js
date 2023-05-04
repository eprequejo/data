// load the data from a local file
d3.csv("Life_Expectancy_Data.csv").then(fullData => {

  // filter data by year 2015
  let dataByYear = fullData.filter(d => d.Year == "2015")
  console.log(dataByYear);

  // clean the data
  let data = cleanData(dataByYear);

  let sizeScale = d3.scaleLinear()
    .domain(d3.extent (data, d => d.lifeExpentancy ))
    .range(["10px", "70px"]);

  let colorScale = d3.scaleLinear()
    .domain(d3.extent (data, d => d.icor ))
    .range (["red", "blue"]);

  let element = d3
    .select("body")
    .append("ul");
    
  // Introducir todas las etiquetas li necesarias
  element
    .selectAll ("li") // seleccion de tantas li como haga falta
    .data(data) // JOIN
    .enter ()
    .append ("li")
    .text(d => `${d.country} - ${d.lifeExpentancy} - ${d.icor}` ) // just testing
    .style ("font-size", d => sizeScale(d.lifeExpentancy))
    .style("color", d => colorScale(d.icor));

});