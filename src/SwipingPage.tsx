import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';

type Cloth = {
  id: string;
  image: string;
  name: string;
};

const SwipingPage = () => {
  const [clothes, setClothes] = useState<Cloth[]>([]);
  const [currentCloth, setCurrentCloth] = useState<number>(0);

  useEffect(() => {
    const fetchClothes = async () => {
      const clothesRef = firebase.firestore().collection('clothes');
      const snapshot = await clothesRef.get();
      const clothesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Cloth[];
      setClothes(clothesData);
    };
    fetchClothes();
  }, []);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentCloth(currentCloth + 1);
    } else if (direction === 'right') {
      setCurrentCloth(currentCloth + 1);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Swiping Page</h1>
      <div className="card">
        <img src={clothes[currentCloth]?.image} alt="Cloth" />
        <h3>{clothes[currentCloth]?.name}</h3>
        <button onClick={() => handleSwipe('left')}>Swipe Left</button>
        <button onClick={() => handleSwipe('right')}>Swipe Right</button>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SwipingPage;
