import { clientCredentials } from '../utils/client';

const getClimates = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/climates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getClimates;
