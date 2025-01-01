const data = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 },
];

function generateChart() {
  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: data.map((item) => item.day),
      datasets: [{
        data: data.map((item) => item.amount),
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(10, 79%, 75%)",
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { display: false },
      },
      tooltip: {
        callbacks: {
          title: (context) => `$${context[0].formattedValue}`,
          label: () => "",
        },
      },
    },
  });
}
generateChart();
