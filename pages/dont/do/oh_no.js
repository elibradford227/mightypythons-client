import React from 'react';
import Sheep from '../../../components/dontOpen/Sheep';

export default function OhNo() {
  return (
    <div>
      <div>
        <div>
          <div className="cardMover3">
            <div className="warnedCard3">
              <header style={{
                color: 'black', fontSize: '25px', textAlign: 'center', marginTop: '10px',
              }}
              >
                GET HIM BEFORE HE GETS YOU!!!
              </header>
            </div>
          </div>
          <Sheep />
        </div>
      </div>
    </div>
  );
}
