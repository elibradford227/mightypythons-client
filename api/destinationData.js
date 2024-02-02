import { clientCredentials } from '../utils/client';

const getDestinations = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination`, {
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

const deleteDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination/${id}`, {
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
  fetch(`${clientCredentials.databaseURL}/destination`, {
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
  fetch(`${clientCredentials.databaseURL}/destination/${id}`, {
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
