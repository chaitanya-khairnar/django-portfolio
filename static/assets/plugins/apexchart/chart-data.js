'use strict';

$(document).ready(function() {

	// Area chart
	
	if ($('#apexcharts-area').length > 0) {
	var options = {
		chart: {
			height: 350,
			type: "area",
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: "smooth"
		},
		series: [{
			name: "Last Year Consuption (kWh)",
			data: [45, 60, 75, 51, 42, 42, 30]
		}, {
			name: "Present Year Consumption (kWh)",
			color: '#FFBC53',
			data: [24, 48, 56, 32, 34, 52, 25]
		}],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		}
	}
	var chart = new ApexCharts(
		document.querySelector("#apexcharts-area"),
		options
	);
	chart.render();
	}

	// Bar chart
	
	if ($('#bar').length > 0) {
	var optionsBar = {
		chart: {
			type: 'bar',
			height: 350,
			width: '100%',
			stacked: false,
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		plotOptions: {
			bar: {
				columnWidth: '45%',
			}
		},
		series: [{
			name: "Consumption (kWh)",
			color: '#fdbb38',
			data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551, 563, 421, 563, 254, 452],
		}],
		labels: ['14:00', '14:03', '14:06', '14:09', '14:12', '14:15', '14:18', '14:21', '14:24', '14:27', '14:30', '14:33'],
		xaxis: {
			labels: {
				show: true
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: true
			},
		},
		yaxis: {
			axisBorder: {
				show: true
			},
			axisTicks: {
				show: true
			},
			labels: {
				style: {
					colors: '#777'
				}
			}
		},
		title: {
			text: '',
			align: 'left',
			style: {
				fontSize: '18px'
			}
		}

	}
  
	var chartBar = new ApexCharts(document.querySelector('#bar'), optionsBar);
	chartBar.render();
	}
  
});