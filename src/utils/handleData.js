import { useDispatch } from 'react-redux';
import {db} from './firebase';

import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,

} from 'firebase/firestore'
import { setData } from '../redux/slices/dataSlice';


const Data_Collection = 'Products';
const dispatch = useDispatch()

export const getData = async() => {
    try{
        const docRef = doc(db, Data_Collection, 'Catagories')
        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()) {
            throw new Error('Products not found')
        }
        const theData = docSnap.data()
        dispatch(setData(theData))
    } catch(e) {
        console.error(e.message)
    }
}