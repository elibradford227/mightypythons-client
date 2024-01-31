// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createActivity, updateActivity } from '../../api/activityData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  destination: '',
  description: '',
};

function ActivityForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateActivity(formInput).then(() => router.push(`/activities/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createActivity(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateActivity(patchPayload).then(() => {
          router.push('/activity');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Activity</h2>

      {/* Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Destination INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Destination" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Destination"
          name="destination"
          value={formInput.destination}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ROLE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
        <Form.Control
          type="text"
          style={{ height: '100px' }}
          placeholder="Enter Description"
          name="destination"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Activity</Button>
    </Form>
  );
}

ActivityForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    destination: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ActivityForm.defaultProps = {
  obj: initialState,
};

export default ActivityForm;
