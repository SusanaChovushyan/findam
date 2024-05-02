import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

async function getannouncements(db) {
  const citiesCol = collection(db, 'announcements');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => ( doc.data() ));
  return cityList;
};

export { getannouncements }