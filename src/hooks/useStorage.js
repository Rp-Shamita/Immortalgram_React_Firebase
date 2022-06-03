import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { serverTimestamp, addDoc } from "firebase/firestore";
import { collectionRef } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, file.name);
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                addDoc(collectionRef, {
                    "url" : url, 
                    "createdAt" : serverTimestamp()
                }).then(() => {
                    console.log("uploaded!")
                })
                setUrl(url)
            }); 
        });

    }, [file])

    return { progress, error, url };
}

export {collectionRef};
export default useStorage;