/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createDestination, updateDestination } from '../../api/destinationData';
import getClimates from '../../api/climateData';

const initialState = {
  id: 0,
  name: '',
  bio: '',
  image: '',
  userId: '',
  climateId: 0,
  favorite: false,
};

function DestinationsForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [climates, setClimates] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getClimates().then(setClimates);
    if (obj.id) {
      setFormInput({
        id: obj.id,
        name: obj.name,
        bio: obj.bio,
        image: obj.image,
        userId: user.id,
        climateId: obj.climate.id,
        favorite: obj.favorite,
      });
    }
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
    if (obj.id) {
      const payload = {
        id: formInput.id,
        name: formInput.name,
        bio: formInput.bio,
        image: formInput.image,
        userId: user.id,
        climateId: formInput.climateId,
        favorite: formInput.favorite,
      };
      updateDestination(formInput.id, payload).then(() => router.push(`/destinations/${obj.id}`));
    } else {
      const payload = { ...formInput, userId: user.id };
      createDestination(payload).then(() => router.push('/destinations'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Destination</h2>

      {/* Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Location"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ROLE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Enter Description" className="mb-3">
        <Form.Control
          type="text"
          style={{ height: '100px' }}
          placeholder="Enter Description"
          name="bio"
          value={formInput.bio}
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

      {/* Climate SELECT */}
      <FloatingLabel controlId="floatingSelect" label="Climate">
        <Form.Select
          aria-label="Climate"
          name="climateId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.climateId}
          required
        >
          <option value="">Select a Climate</option>
          {
            climates?.map((climate) => (
              <option
                key={climate.id}
                value={climate.id}
              >
                {climate.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <h5 style={{ color: 'black' }}>Favorite</h5>
      <label className="switch">
        <input
          type="checkbox"
          id="favorite"
          name="favorite"
          label="Favorite?"
          checked={formInput.favorite}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              favorite: e.target.checked,
            }));
          }}
        />
        <span className="slider" />
      </label>

      <br />

      {/* <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      /> */}

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Destination</Button>
    </Form>
  );
}

DestinationsForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    climate: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
  }),
};

DestinationsForm.defaultProps = {
  obj: initialState,
};

export default DestinationsForm;
