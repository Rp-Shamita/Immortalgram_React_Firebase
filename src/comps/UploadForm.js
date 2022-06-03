import { useState } from "react";
import ProgressBar from "./progressBar";
import ImageGrid from "./ImageGrid";

const Uploadform = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    function changeHandler(e){
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        }
        else{
            setFile(null);
            setError("Please select a valid image type");
        }

    }
    return ( 
        <div className="form">
            <form>
                <label><input type="file" onChange={changeHandler}/><span>+</span></label>
                <div className="output">
                    { error && <div className="error">{ error }</div>}
                    { file && <div className="file">{ file.name }</div>}
                    { file && <ProgressBar file={file} setFile={setFile} />}
                    { file && <ImageGrid />}
                </div>
            </form>
            </div>
     );
}
 
export default Uploadform;