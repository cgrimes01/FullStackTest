export const requestStatistics = {
  fibonaci: (sequence) => {
    let url = `statistics/fibonaci?input=${sequence}`
    fetch(url)
      .then(response => response.json());
  },
};