import { getActivities } from './activityData';
import { getSingleDestination } from './destinationData';

const viewDestinationDetails = (destinationId) => new Promise((resolve, reject) => {
  getSingleDestination(destinationId)
    .then((destinationObject) => {
      getActivities(destinationObject.activity_id)
        .then((activityObject) => {
          resolve({ activityObject, ...destinationObject });
        });
    }).catch((error) => reject(error));
});

export default viewDestinationDetails;
