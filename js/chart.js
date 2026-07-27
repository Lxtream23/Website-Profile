const canvas = document.getElementById("myChart");

if (canvas) {
  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["HTML", "CSS", "JavaScript", "Bootstrap", "UI/UX"],

      datasets: [
        {
          label: "Skill (%)",

          data: [95, 90, 85, 80, 75],

          backgroundColor: ["#1E3A5F", "#4F7CAC", "#7DA0CA", "#A7C5EB", "#D6E4F0"],

          borderRadius: 10,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          max: 100,
        },
      },
    },
  });
}
