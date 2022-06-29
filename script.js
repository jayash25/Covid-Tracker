const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56055d6808msh7facef1894b116cp1a1ca5jsne0b9ac9e552e',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
  }
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
  .then((response) => 
     response.json()
  )
  .then((data) => {
    console.log(data);
    let parsedData=data.countries_stat[1];
    finaloutput(parsedData);
  })
  .catch(err => console.error(err));



$("#submitbtn").click(function() {
  var query = $("#inputtxt").val();
  
  if (query == "") {
    query = "India";
  }
  query=query.charAt(0).toUpperCase() + query.slice(1);

  if(query=="Usa" || query=="Uae" || query=="Uk")
  {
    query=query.toUpperCase();
  }
  
  fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then((response) => 
       response.json()
    )
    .then((data) => {
      console.log(data);
      let parsedData;
      for(let i=0;i<213;i++){
        if(data.countries_stat[i].country_name === query){
          parsedData = data.countries_stat[i];
          break;
        }
      }
      finaloutput(parsedData);
    })
    .catch(err => console.error(err));
});

function finaloutput(data) {
  $("#country").text(data.country_name);
  $("#active").text(data.active_cases.toLocaleString());
  $("#cases").text(data.cases.toLocaleString());
  $("#critical").text(data.serious_critical.toLocaleString());
  $("#death").text(data.deaths.toLocaleString());
  $("#recovered").text(data.total_recovered.toLocaleString());
  $("#tests").text(data.total_cases_per_1m_population.toLocaleString());
}
