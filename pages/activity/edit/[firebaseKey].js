// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function EditActivity() {
//   const [editItem, setEditItem] = useState({});
//   const router = useRouter();
//   const { firebaseKey } = router.query;

//   useEffect(() => {
//     getSingleActivity(firebaseKey).then(setEditItem);
//   }, [firebaseKey]);

//   return (<ActivityForm obj={editItem} />);
// }
