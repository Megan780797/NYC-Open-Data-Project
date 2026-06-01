//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "FireCauses.json"; //https://data.cityofnewyork.us/Public-Safety/Bureau-of-Fire-Investigations-Fire-Causes/ii3r-svjz/about_data"
  data = await info.json();
  console.log(data); 
}
function FireCausesByBorough(){
  //Variables to keep count of accidents by borough
  let Queens= 0, Manhattan = 0, Brooklyn=0, Bronx=0;
}
for(let i = 0; i < data.length; i++){
    let fire = data[i];
    if(Fire.borough == "QUEENS"){
      Queens++;
    }else if(Fire.borough == "MANHATTAN"){
      Manhattan++;
    }else if(Fire.borough == "BROOKLYN"){
      Brooklyn++;
    }else if(Fire.borough == "BRONX"){
      Bronx++;
  }
}
 let output = document.getElementById("output");
  let build = "";
  for(let i = 0; i < data.length; i+=1){
    let fire = data[i];
      build+=`<div class="card">
      <hr> 
      <h1${fire.case_year}</h1>
    <h3>${fire.cause_fire_description}</h3>
    <p>${fire.borough}</p>
 output.innerHTML = build;
     </div>`   
  }
    //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",Queens],
    ["MANHATTAN", Manhattan],
    ["BROOKLYN",Brooklyn ],
    ["BRONX", Bronx],
  ];
