$(document).ready(function() {

var measurements = {
    nickelThickness: [],
    goldThickness: []
};

$("#niAuSubmit").on("click", function(event){
    event.preventDefault();

    var nickel = $("#niThick").val().trim();
    var gold = $("#auThick").val().trim();

    measurements.nickelThickness.push(parseFloat(nickel));
    measurements.goldThickness.push(parseFloat(gold));

    getData();

    $("#niThick").val("");
    $("#auThick").val("");
});

// var fs = require("fs");
// var fileContent = "Hello, does this work?";

// fs.writeFile("./data.txt", fileContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log("File has been created!");
// })

var ctx_live = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(ctx_live, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
        {
            data: measurements.nickelThickness,
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

var ctx = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
        {
            data: measurements.goldThickness,
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

      chart1.update();
      chart2.update();
    }
  });
};

//ready() callback
});