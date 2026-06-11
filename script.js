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

// This function the types of fires but by borugh
function FireCauseByBorough(){
  let Queens= 0, Manhattan = 0,  Staten=0, Brooklyn=0, Bronx=0;
 for(let i = 0; i < data.length; i++){    
      let fire = data[i];
      if(fire.borough == "QUEENS"){
        Queens++;
      } else if(fire.borough == "MANHATTAN"){
        Manhattan++;
      } else if(fire.borough == "BROOKLYN"){
        Brooklyn++;
      } else if(fire.borough == "BRONX"){
        Bronx++;
      }else if(fire.borough == "STATEN ISLAND"){
          Staten++;
      }
  }

    let chartData = [
        ["QUEENS",Queens],
        ["MANHATTAN",Manhattan],
        ["BROOKLYN", Brooklyn],
        ["BRONX", Bronx],
        ["STATEN ISLAND", Staten]
    ];     

    let chartType = get("chartType").value;
    
    displayChart(chartData, "chart", chartType );
}


  // the fucntion for the types of fires//
  function FireCauseByCauseOfFire(){
     let s=0, fp=0,c=0, ew=0,ol=0;
      
     for(let i = 0; i < data.length; i++){
      let fire = data[i];
      if(fire.cause=="SMOKING"){
        s++;
      }
      else if(fire.cause=="FIREPLACE"){
        fp++;
      }
    else if(fire.cause=="CANDLE"){
      c++;
    }
  else if(fire.cause =="ELECTRICALWIRING"){
    ew++;
  }
  else if(fire.cause =="OTHERLIQUID"){
    ol++;
  }
  }
  let chartData=[
    ["SMOKING", s],
    ["FIREPLACE", fp],
    ["CANDLE",c],
    ["ELECTRICALWIRING",ew],
    ["OTHERLIQUID",ol]
  ]; 
  
    let chartType = get("chartType").value;

    displayChart(chartData, "chart", chartType );

  }