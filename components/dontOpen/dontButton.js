import React from 'react';
import { useRouter } from 'next/router';

export default function DontButton() {
  const router = useRouter();

  const secondPopUp = () => {
    if (window.confirm('You really REALLY do not want to continue!!!')) {
      router.push('/dont/do/it');
    }
  };

  const firstPopUp = () => {
    if (window.confirm('I am telling you that you do not want to continue!!!')) {
      secondPopUp();
    }
  };

  return (
    <div className="light-button">
      <button className="bt" type="button" onClick={firstPopUp}>
        <div className="light-holder">
          <div className="dot" />
          <div className="light" />
        </div>
        <div className="button-holder">
          <p>Dont</p>
        </div>
      </button>
    </div>

  );
}
