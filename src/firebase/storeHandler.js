import { firestore } from './firebase_main';
import { collection, getDoc, addDoc } from 'firebase/firestore';

export async function getBoatImage(id)
{
    const squery = await getDoc(collection(firestore, "id"));
    squery.forEach((doc) => {
        console.log(doc.data());
    });
}