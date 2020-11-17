export const requestStatistics = {
  fibonaci: (sequence) => {
    let url = `statistics/fibonacci?input=${sequence}`
    fetch(url)
      .then(response => response.json());
  },
};