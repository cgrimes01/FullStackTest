export const requestStatistics = {
  fibonaci: (sequence) => {
    const url = `statistics/fibonacci?input=${sequence}`
    return fetch(url).then(response => response.text());
  },
};
