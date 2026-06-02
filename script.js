//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "FireCauses.json"; //https://data.cityofnewyork.us/Public-Safety/Bureau-of-Fire-Investigations-Fire-Causes/ii3r-svjz/about_data"
  info = await fetch(link);
  data = await info.json();
  console.log(data); 

  output = get("output");
  let build = "";

  //Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let fire = data[i];
      build += card(fire);    
  }

  //Display cards in the div with id "leftPanel"
   output.innerHTML = build;

}

function FireCausesByBorough(){
  //Variables to keep count of accidents by borough
  let Queens= 0, Manhattan = 0, Brooklyn=0, Bronx=0;
  for(let i = 0; i < data.length; i++){
      let fire = data[i];
      if(fire.borough == "QUEENS"){
        Queens++;
      }else if(fire.borough == "MANHATTAN"){
        Manhattan++;
      }else if(fire.borough == "BROOKLYN"){
        Brooklyn++;
      }else if(fire.borough == "BRONX"){
        Bronx++;
      }
  }
  // Need to add other code for creating Charts
}


    //Creating data for chart (as array of arrays) with 1st position of array being label
  // let chartData = [
  //   ["QUEENS",Queens],
  //   ["MANHATTAN", Manhattan],
  //   ["BROOKLYN",Brooklyn ],
  //   ["BRONX", Bronx],
  // ];


