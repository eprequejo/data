// load the data from a local file
d3.csv("Life_Expectancy_Data.csv").then(fullData => {

  // filter data by year 2015
  let dataByYear = fullData.filter(d => d.Year == "2015")
  console.log(dataByYear);

  // clean the data
  let data = cleanData(dataByYear);

  let element = d3
    .select("body")
    .append("ul");
    
  // Introducir todas las etiquetas li necesarias
  element
    .selectAll ("li") // seleccion de tantas li como haga falta
    .data(data) // JOIN
    .enter()
    .append("li")
    .text(d => `${d.country} - ${d.year} - ${d.lifeExpentancy} - ${d.schooling} - ${d.gdp} - ${d.icor}` ) // just testing

});