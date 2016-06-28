function drawCharts(){
	var ctx = document.getElementById("pric_chart");
	var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [300, 50, 100, 40, 10],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Dark Grey"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
            }
        }
    };
    window.myPie = new Chart(ctx, config);

}
function drawCharts_project(){
	var ctx = document.getElementById("projects_chart");
	var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [300, 50, 100, 40, 10],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Dark Grey"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
            }
        }
    };
    window.myPie = new Chart(ctx, config);

}

        var randomScalingFactor = function() {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function() {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
        };
function draw_project_state_Chart(){
	var dtx = document.getElementById("project_state_chart");
	  var horizontalBarChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor:[ "rgba(220,220,220,0.5)","rgba(22,22,22,0.5)","#FF0000","#00FF00","#0000FF"],
                data: [10, 20, 30, 40,50, 60, 70]
            }]

        };
            window.myHorizontalBar = new Chart(dtx, {
                type: 'horizontalBar',
                data: horizontalBarChartData,
                options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide and green
                    elements: {
                        rectangle: {
                            borderWidth: 0,
                            borderColor: 'rgb(0, 255, 0)',
                            borderSkipped: 'left'
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        
                    }
                }
            });
};
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/*function loadMap(){
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}*/
//loadMap();
drawCharts();
draw_project_state_Chart();
drawCharts_project();