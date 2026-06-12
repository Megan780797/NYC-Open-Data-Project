// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Create the function card() to generate an appropriate info card
function card( info ){ 
    let build = `<div class="card fitted">
                    <h1>${info.case_year}</h1>
                    <h3>${info.cause_fire_description}</h3>
                    <p>${info.borough}</p>
                    <p>${info.fire_code_category}</p>
                </div>`;

    return build;
}

function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}