// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createDestination, updateDestination } from '../../api/destinationData';

const initialState = {
  destination: '',
  location: '',
  climate: '',

  description: '',
};

function DestForm({ obj }) {
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
      updateDestination(formInput).then(() => router.push(`/destination/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createDestination(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateDestination(patchPayload).then(() => {
          router.push('/destination');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Destination</h2>

      {/* Destination INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Destination"
          name="destination"
          value={formInput.destination}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Destination Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Location INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Location"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Climate INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Climate" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Climate"
          name="climate"
          value={formInput.climate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Destination</Button>
    </Form>
  );
}

DestForm.propTypes = {
  obj: PropTypes.shape({
    destination: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    climate: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

DestForm.defaultProps = {
  obj: initialState,
};

export default DestForm;
