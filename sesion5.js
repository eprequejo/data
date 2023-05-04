// load the data from a local file
d3.csv("Life_Expectancy_Data.csv").then(fullData => {

  // filter data by year 2015
  let dataByYear = fullData.filter(d => d.Year == "2015")

  // clean the data
  let data = cleanData(dataByYear);
  console.log(data)

  let height = 600
  let width = 600
  let margin = {
    top: 40,
    botton: 40,
    left: 40,
    right: 40     
  };

  // life expentancy
  let escalaX = d3.scaleLinear() 
    .domain(d3.extent (data, d => d.lifeExpentancy))
    .range ([0 + margin.left, width - margin.right])
    
  // icor
  let escalaY = d3.scaleLinear()
    .domain(d3.extent (data, d => d.icor ))
    .range ([height-margin.botton, 0 + margin.top])

  let sizeScale = d3.scaleLinear()
    .domain(d3.extent (data, d => d.lifeExpentancy ))
    .range(["3", "10"]);

  let colorScale = d3.scaleLinear()
    .domain(d3.extent (data, d => d.icor ))
    .range (["red", "grey", "blue"]);

  let element = d3
    .select("body")
    .append("svg")
    .attr("id", "main-svg");

  element
    .selectAll ("circle")
    .attr ("width", width)
    .attr ("height", height)
    .data(data)
    .enter()
    .append ("circle")
    .attr ("r", d => sizeScale(d.lifeExpentancy))
    .attr("cx", d => escalaX(d.lifeExpentancy))
    .attr("cy", d => escalaY(d.icor))
    .attr("fill", d => colorScale(d.icor));

  // eje y 
  let ejeY = d3
    .axisLeft(escalaY)
    .ticks(10);
  element
    .append("g")
    .attr("transform", "translate (" + margin.left + ",0)")
    .call (ejeY);
  
  // eje x
  let ejeX = d3
    .axisBottom(escalaX)
    .ticks(10)
    .tickFormat (d3.format(".3s"));
  element
    .append ("g")
    .attr ("transform", "translate (0, " + (height - margin.botton) + ")")
    .call (ejeX);
  
});