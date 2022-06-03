import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { useState } from "react";   

const UseFirestore = (collection) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const unsub = onSnapshot(collection, (snapshot) => {
            let imagedocs=[]
            snapshot.docs.forEach(doc => {
                imagedocs.push({...doc.data(), id: doc.id});
            })
            setImages(imagedocs);
        })
        return() => unsub();
    },[collection])
    
    return {images};
}
 
export default UseFirestore;