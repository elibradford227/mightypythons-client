/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Falling from '../../../components/dontOpen/Falling';

export default function It() {
  const router = useRouter();
  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dont/do/oh_no');
    }, 5000);
    return () => clearTimeout(timer);
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     redirect('/');
  //   }, 5);
  // }, []);
  // const route = () => {
  //   setTimeout(() => {
  //     <Route exact path="/oh_no" />;
  //   }, 2000);
  //   return (<Falling />);
  // };
  return (
    <Falling />
  );
}
