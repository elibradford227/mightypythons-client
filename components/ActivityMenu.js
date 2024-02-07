import React, { useEffect, useState, useRef } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getActivities } from '../api/activityData';
import { addActivity } from '../api/destinationData';

const initialState = {
  activity: 0,
  destination: 0,
};

// eslint-disable-next-line react/prop-types
function ActivityMenu({ destinationId }) {
  const [formInput, setFormInput] = useState(initialState);
  const [modalShow, setModalShow] = React.useState(false);
  const [activities, setActivities] = useState([]);
  const mountedRef = useRef(true);

  const handleShow = () => {
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const allActivities = () => {
    getActivities().then((activity) => {
      if (mountedRef.current) {
        setActivities(activity);
      }
    });
  };

  useEffect(() => {
    allActivities();
    setFormInput((prevState) => ({
      ...prevState,
      activity: activities.id,
      destination: destinationId,
    }));

    return () => {
      mountedRef.current = false;
    };
  }, [destinationId, activities]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = formInput;
    console.warn(payload);
    addActivity(destinationId, payload).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <Button className="button" onClick={handleShow} type="button">Add Activity</Button>
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Activity Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingSelect">
            <Form.Select
              aria-label="Activity"
              name="activity"
              onChange={handleChange}
              value={formInput.activity}
              className="mb-3"
            >
              <option value="">Select an Activity</option>
              {
              activities.map((act) => (
                <option
                  key={act.id}
                  value={act.id}
                >
                  {act.name}
                </option>
              ))
            }
            </Form.Select>
          </FloatingLabel>
          <Button className="delete-button" variant="black" onClick={handleSubmit}>Add</Button>
        </Modal.Body>
        <Modal.Footer>
          {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ActivityMenu;
