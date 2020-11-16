export const requestStatistics = 
  sum: (inputs) => {
    let url = 'statistics?'
    inputs.forEach(x => {
      url += `inputs=${x}&`;
    });
    fetch(url)
    .then(response => response.json()
  }
  
);