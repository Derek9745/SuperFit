document.addEventListener('DOMContentLoaded', () => {

  
  const allDays = [
    'Mon W1', 'Tue W1', 'Wed W1', 'Thu W1', 'Fri W1', 'Sat W1', 'Sun W1',
    'Mon W2', 'Tue W2', 'Wed W2', 'Thu W2', 'Fri W2', 'Sat W2', 'Sun W2',
    'Mon W3', 'Tue W3', 'Wed W3', 'Thu W3', 'Fri W3', 'Sat W3', 'Sun W3',
    'Mon W4', 'Tue W4', 'Wed W4', 'Thu W4', 'Fri W4', 'Sat W4', 'Sun W4'
  ];
  
//Placeholder weight loss
  const allWeightLossData = [
    190, 189, 188, 187, 186, 186, 185,
    184, 184, 183, 182, 182, 181, 181,
    180, 179, 179, 178, 178, 177, 177,
    176, 176, 175, 175, 174, 174, 173
  ];

  const allMoodData = [
    7, 6, 8, 5, 7, 6, 7,
    8, 7, 7, 6, 7, 8, 7,
    6, 6, 7, 5, 6, 7, 6,
    7, 8, 7, 6, 7, 7, 8
  ];

  const allWorkoutTimeData = [
    30, 40, 35, 45, 50, 0, 0,
    30, 30, 40, 45, 50, 20, 0,
    35, 40, 40, 50, 60, 30, 0,
    40, 45, 50, 55, 60, 35, 20
  ];


  // Chart setup
  const ctx = document.getElementById('myLineChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // will be filled when user runs report
      datasets: [
        {
          label: 'Weight (lbs)',
          data: [],
          borderColor: '#000',
          borderWidth: 3,
          tension: 0.3,
          pointRadius: 4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Days',
            color: '#000',
            font: { size: 14, weight: 'bold' }
          },
          grid: { display: false },
          ticks: {
            color: '#000',
            font: { size: 12 }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Weight (lbs)',
            color: '#000',
            font: { size: 14, weight: 'bold' }
          },
          grid: {
            color: 'rgba(0,0,0,0.08)'
          },
          ticks: {
            color: '#000',
            font: { size: 12 },
            stepSize: 1
          },
          beginAtZero: false
        }
      }
    }
  });

  // UI Elements to tie into html file
  const weightLossBtn = document.getElementById('btnWeightLoss');
  const moodBtn = document.getElementById('btnMoodLevel');
  const workoutTimeBtn = document.getElementById('btnWorkoutTime');
  const runReportBtn = document.querySelector('.run-report');
  const graphTitle = document.getElementById('graphTitle');
  const timeRangeSelect = document.getElementById('timeRange');

  let activeMetric = null;
  let selectedRange = parseInt(timeRangeSelect.value, 10);

  //button logic
  weightLossBtn.addEventListener('click', () => {
    activeMetric = 'weight';
    graphTitle.textContent = 'Weight Change';
  });

  moodBtn.addEventListener('click', () => {
    activeMetric = 'mood';
    graphTitle.textContent = 'Mood Level';
  });

  workoutTimeBtn.addEventListener('click', () => {
    activeMetric = 'workout';
    graphTitle.textContent = 'Workout Time';
  });

  // Update selected range when dropdown changes,
  // and if weight loss is already selected updates graph
  timeRangeSelect.addEventListener('change', () => {
    selectedRange = parseInt(timeRangeSelect.value, 10);
    updateChartIfActive();
  });

  // Run Report button applies the selected dataset & range
  runReportBtn.addEventListener('click', () => {
    if (!activeMetric) {
      alert('Click a button first!');
      return;
    }
    updateChartIfActive();
  });

  //Updates chart based on current information
  function updateChartIfActive() {
    if (!activeMetric) return;

    chart.data.labels = allDays.slice(0, selectedRange);

    if (activeMetric === 'weight') {
      chart.data.datasets[0].label = 'Weight (lbs)';
      chart.data.datasets[0].data = allWeightLossData.slice(0, selectedRange);
      chart.options.scales.y.title.text = 'Weight (lbs)';
      chart.options.scales.y.ticks.stepSize = 1;
      chart.options.scales.y.beginAtZero = false;
    } else if (activeMetric === 'mood') {
      chart.data.datasets[0].label = 'Mood Level (1-10)';
      chart.data.datasets[0].data = allMoodData.slice(0, selectedRange);
      chart.options.scales.y.title.text = 'Mood Level';
      chart.options.scales.y.ticks.stepSize = 1;
      chart.options.scales.y.beginAtZero = true;
    } else if (activeMetric === 'workout') {
      chart.data.datasets[0].label = 'Workout Time (mins)';
      chart.data.datasets[0].data = allWorkoutTimeData.slice(0, selectedRange);
      chart.options.scales.y.title.text = 'Minutes';
      chart.options.scales.y.ticks.stepSize = 10;
      chart.options.scales.y.beginAtZero = true;
    }

    chart.update();
  }
});
