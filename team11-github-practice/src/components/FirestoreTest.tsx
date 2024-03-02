'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import db from '../lib/firebaseConfig';

function FirestoreTest() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // DBからデータを取得
    const postData = collection(db, 'posts');
    console.log(postData);
    getDocs(postData).then((snapShot) => {
      console.log(snapShot.docs.map(doc => doc.data()));
    });
  }, []);
  return (
    <div>
      <h1>Firestore Test</h1>
    </div>
  );
}


export default FirestoreTest;