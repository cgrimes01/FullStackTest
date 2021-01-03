export const requestStatistics = {
    fibonacci: (sequence) => {
      const url = `calculator/fibonacci?input=${sequence}`
      return fetch(url).then(response => response.text());
    },
};
