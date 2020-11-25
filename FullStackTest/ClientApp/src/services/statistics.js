export const requestStatistics = {
  fibonaci: (sequence) => {
    const url = `calculator/fibonacci?input=${sequence}`
    return fetch(url).then(response => response.text());
  },
};
