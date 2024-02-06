/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Falling from '../../../components/dontOpen/Falling';

export default function It() {
  const router = useRouter();
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dont/do/oh_no');
    }, 5000);
    return () => clearTimeout(timer);
  });

  // const FirstLine = async () => {
  //   await delay(1000);
  //   return (<div>I WARNED YOU!!!</div>);
  // };

  return (
    <>

      <div className="cardMover">
        <div className="warnedCard">
          <header style={{
            color: 'black', fontSize: '50px', textAlign: 'center', marginTop: '10px',
          }}
          >
            I WARNED YOU!!!
          </header>
        </div>
      </div>
      {/* <FirstLine /> */}
      <Falling />
      <div className="cardMover2">
        <div className="warnedCard2">
          <header style={{
            color: 'black', fontSize: '50px', textAlign: 'center', marginTop: '10px',
          }}
          >
            YOU HAVE AWAKENED THE BEAST!!!
          </header>
        </div>
      </div>
    </>
  );
}
