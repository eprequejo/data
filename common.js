function cleanData(data) {
  return data.map((d, i) => {
    return { 
      index: i,
      year: d.Year, 
      lifeExpentancy: d["Life expectancy "], 
      country: d.Country,
      icor: d["Income composition of resources"],
      gdp: d.GDP,
      schooling: d.Schooling
    }
  });
}