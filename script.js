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
  for(let i = 0; i < data.length; i++){
    let Queens= 0, Manhattan = 0,  Staten=0, Brooklyn=0, Bronx=0;
      let fire = data[i];
      if(fire.borough == "QUEENS"){
        Queens++;
      } else if(fire.borough == "MANHATTAN"){
        Manhattan++;
      } else if(fire.borough == "BROOKLYN"){
        brooklyn++;
      } else if(fire.borough == "BRONX"){
        bronx++;
      }
        else if(fire.borough == "STATEN ISLAND"){
          Staten++;
        }
        let chartData = [
    ["QUEENS",queens],
    ["MANHATTAN",manhattan],
    ["BROOKLYN", brooklyn],
    ["BRONX", bronx],
    ["STATEN ISLAND", Staten]
  ];
        
      
  }
}
  // Need to add other code for creating Charts
  function FireCausesByCause(){
     for(let i = 0; i < data.length; i++){
      let smoking=0, fireplace=0,candle=0, electricalwiring=0,OtherLiquid=0;
      let firecause=[i];
      if(fire.cause=="SMOKING"){
        smoking++;
      }
      else if(fire.cause=="FIREPLACE"){
        fireplace++;
      }
    else if(fire.cause=="CANDLE"){
      candle++;
    }
  else if(fire.cause =="ELECTRICALWIRING"){
    electricalwiring++;
  }
  else if(fire.cause =="OTHERLIQUID"){
    otherliquid++;
  }
  }

    //Creating data for chart (as array of arrays) with 1st position of array being label
  
  }