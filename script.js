//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "FireCauses.json"; //https://data.cityofnewyork.us/Public-Safety/Bureau-of-Fire-Investigations-Fire-Causes/ii3r-svjz/about_data"
  data = await info.json();
  console.log(data); 
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
     </div>`   
  }
  output.innerHTML = build;

function FireCausesByBorough(){
  //Variables to keep count of accidents by borough
  let Queens= 0, Manhattan = 0, Brooklyn=0, Bronx=0;
}