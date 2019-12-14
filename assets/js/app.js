$(document).ready(function() {

var nickelThickness = [];
var goldThickness =[];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min + 1) + min;
}

var ctx_live = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(ctx_live, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
        {
            data: nickelThickness,
            label: 'Nickel Thickness',
            borderColor: '#545454',
            backgroundColor: '#545454',
            fill: false,
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontSize: 18,
            }
        },
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 15,
                    display: false
                }
            }],
            yAxes:[{
                ticks: {
                    fontSize: 15,
                    suggestedMin: 100,
                    suggestedMax: 240
                }
            }]
        },
    }
});

var ctx_live = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx_live, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
        {
            data: goldThickness,
            label: 'Gold Thickness',
            borderColor: '#d4af37',
            backgroundColor: '#d4af37',
            fill: false,
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontSize: 18,
            }
        },
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 15,
                    display: false
                }
            }],
            yAxes:[{
                ticks: {
                    fontSize: 15,
                    suggestedMin: 1.5,
                    suggestedMax: 5
                }
            }]
        },
    }
});

var timeStamp = moment().format('MMMM Do YYYY, h:mm a');

var getData = function() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts/' + timeStamp + '/comments',
    success: function(data) {
      timeStamp = moment().format('MMMM Do YYYY, h:mm a');

      chart1.data.labels.push(timeStamp);
      chart2.data.labels.push(timeStamp);
      chart1.data.datasets[0].data.push(getRandomIntInclusive(165, 180));
      chart2.data.datasets[0].data.push(getRandomIntInclusive(2, 2));

      chart1.update();
      chart2.update();
    }
  });
};


setInterval(getData, 3000);

//ready() callback
});