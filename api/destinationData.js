import { clientCredentials } from '../utils/client';

const getDestinations = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve();
    })
    .catch(reject);
});

const getSingleDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createDestination = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateDestination = (id, currentActivity) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentActivity),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getDestinations,
  createDestination,
  updateDestination,
  getSingleDestination,
  deleteDestination,
};
