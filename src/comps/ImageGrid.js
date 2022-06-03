import { collectionRef } from "../firebase/config";
import UseFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
    const { docs } = UseFirestore(collectionRef);     

    return ( 
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key = {doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
     );
}
 
export default ImageGrid;