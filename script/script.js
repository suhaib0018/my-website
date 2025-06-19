const langChart = new Chart(document.getElementById('langChart'), {
    type: 'line',
    data: {
      labels: ['Farsi', 'English'],
      datasets: [{
        label: 'Proficiency',
        data: [100, 95],
        borderColor: '#1e3a8a',
        backgroundColor: '#1e3a8a20',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#1e3a8a',
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });

  const progChart = new Chart(document.getElementById('progChart'), {
    type: 'line',
    data: {
      labels: ['HTML/CSS', 'Java', 'C++'],
      datasets: [{
        label: 'Skill Level',
        data: [60, 50, 80],
        borderColor: '#1e3a8a',
        backgroundColor: '#1e3a8a20',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#1e3a8a',
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });