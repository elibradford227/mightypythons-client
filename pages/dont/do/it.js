/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Falling from '../../../components/dontOpen/Falling';

export default function It() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/oh_no');
    }, 2000);
  }, [navigate]);
  return (
    <div className="falling">
      <Falling />
    </div>
  );
}
