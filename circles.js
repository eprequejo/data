// load the data from a local file
d3.csv("Life_Expectancy_Data.csv").then(data => {

  /** Cleaning data */

  // filter the data to use just Spanish data
  let esData = data.filter(d => d.Country == "Spain");
  console.log(esData);

  let byYear = data.filter(d => d.Year == "2015")
  console.log(byYear);

  // clean the data
  var i = 0;
  let cleanData = byYear.map(d => {
    i = i + 1;
    return { 
      index: i,
      year: d.Year, 
      lifeExpentancy: d["Life expectancy "], 
      country: d.Country,
    }
  });

  console.log(cleanData);

  let colorScale = d3.scaleLinear()
    .domain(d3.extent(cleanData, d => d.lifeExpentancy))
    .range(["red", "green"]);

  let element = d3
    .select("body")
    .append("svg");

  element
    .attr("width", 500)
    .attr("height", 500)
    .selectAll("circle")
    .data(cleanData) // join
    .enter()
    .append("circle")
    .attr("r", d => d.lifeExpentancy)
    .attr("cx", d => parseInt(d.index) * 200)
    .attr("cy", 100)
    .text(d => d.country)
    .style("color", d => colorScale(d.lifeExpentancy))

});