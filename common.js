function cleanData(data) {

  let clean = data.map((d, i) => {
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
  // filter data if no icor para no molestarnos con datos que no existen
  // hacemos dos bucles en esta funcion pero no nos molesta para esta actividad
  return clean.filter(d => d.icor != "");
}