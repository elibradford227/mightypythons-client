/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import './Sheep.css';

export default function Sheep() {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  const router = useRouter();

  const youWin = () => {
    if (window.confirm('You Win!! You Defeated The Beast!!')) {
      router.push('/');
    }
  };

  const handleClick1 = () => {
    setCounter(counter + 1);

    if (counter === 2) {
      youWin();
    }
  };

  useEffect(() => {
    setTimeout(
      () => {
        setVisible(!visible);
      },
      visible ? 5 * 3_000 : 3_000,
    );
  }, [visible]);

  return (
    <>
      <div className="blackBG">
        <h1 style={{ marginTop: '20px', textAlign: 'center' }}>You Have {counter} Points</h1>
        {visible && (
          <div
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              overflow: 'hidden',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <div style={{ transform: 'scale(0.5)', pointerEvents: 'auto' }}>
              <div
                className="sheep"
                style={{ cursor: 'grab' }}
                onClick={() => {
                  console.log(counter);

                  alert(
                    'Oh No!! You got me this time!!',
                  );

                  handleClick1();
                }}
              >
                <div className="legs">
                  <div className="leg leg-1" />
                  <div className="leg leg-2" />
                  <div className="leg leg-3" />
                  <div className="leg leg-4" />
                </div>
                <div className="wool">
                  <div className="piece-of-wool piece-of-wool-1" />

                  <div className="wool-shadowlayer">
                    <div className="piece-of-wool piece-of-wool-5" />
                    <div className="piece-of-wool piece-of-wool-6" />
                    <div className="piece-of-wool piece-of-wool-7" />
                    <div className="piece-of-wool piece-of-wool-8" />
                    <div className="piece-of-wool piece-of-wool-9" />
                  </div>
                  <div className="wool-toplayer">
                    <h1
                      style={{
                        color: 'black',
                        zIndex: 4,
                        fontSize: 40,
                        position: 'absolute',
                        width: 500,
                        top: 20,
                        left: 30,
                        userSelect: 'none',
                      }}
                    >
                      <span style={{ position: 'absolute', rotate: '-40deg' }}>
                        SHEEP!
                      </span>
                    </h1>
                    <div className="piece-of-wool piece-of-wool-2" />
                    <div className="piece-of-wool piece-of-wool-3" />
                    <div className="piece-of-wool piece-of-wool-4" />
                    <div className="piece-of-wool piece-of-wool-5" />
                    <div className="piece-of-wool piece-of-wool-6" />
                    <div className="piece-of-wool piece-of-wool-7" />
                    <div className="piece-of-wool piece-of-wool-8" />
                    <div className="piece-of-wool piece-of-wool-9" />
                    <div className="piece-of-wool piece-of-wool-10" />
                  </div>
                </div>
                <div className="head">
                  <div className="head-face-front" />
                  <div className="head-face" />
                  <div className="head-shadow" />

                  <div className="ear ear-1" />
                  <div className="ear ear-2" />
                  <div className="ear ear-2 ear-shadow" />

                  <div className="eye eye-1">
                    <div className="glow" />
                  </div>
                  <div className="eye eye-2">
                    <div className="glow" />
                  </div>
                  <div className="wool-head">
                    <div className="wool-shadowlayer">
                      <div className="piece-of-wool piece-of-wool-1" />
                      <div className="piece-of-wool piece-of-wool-2" />
                      <div className="piece-of-wool piece-of-wool-3" />
                    </div>

                    <div className="piece-of-wool piece-of-wool-1" />
                    <div className="piece-of-wool piece-of-wool-2" />
                    <div className="piece-of-wool piece-of-wool-3" />
                  </div>
                  {/* <!--<div className="nose">-->
                          <!--<div className="nostril nostril-1"></div>-->
                          <!--<div className="nostril nostril-2"></div>-->
                          <!--</div>--> */}
                </div>
              </div>
            </div>{' '}
          </div>
        )}
      </div>
    </>
  );
}
