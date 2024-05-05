const ctx = document.getElementById('myChart');

let myChart;
let JsonData;

    fetch('data.json')
    .then(function(response){
        if(response.ok == true){
            return response.json();
        }
    })
    .then(
        function(data){
            JsonData = data;
            createChart(data,'bar');
        }
    )

    function setCharttype(type){

        myChart.destroy();

      createChart(JsonData,type);
        

    }



function createChart(data,type){
    myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map(row => row.month),
      datasets: [{
        label: '# of Votes',
        data: data.map(row => row.income),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false
    }
  });

}