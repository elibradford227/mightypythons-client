import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function YouWin() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <body id="youWin">
      <h1 className="transparent" style={{ textAlign: 'center', marginTop: '50px' }}>You Win!!! You Defeated The Beast!!!</h1>
      <div className="firework" />
      <div className="firework" />
      <div className="firework" />
    </body>
  );
}
