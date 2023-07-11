import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [Image, setImage] = useState('')

  const UploadImage=()=>{
    console.log(Image);
    const formData = new FormData()
    formData.append("myFile", Image, Image.name)
    const url = "http://localhost:8080/upload_file"
    axios.post(url, formData).then(()=>{
      console.log("Image Uploaded")
    }).catch(()=>{
      console.log("Image not uploaded")
    })
  }
  return (
    <div className="App">
     <input type='file' name='myFile' onChange={(e)=>{setImage(e.target.files[0])}} />
     <input type="submit" onClick={UploadImage}/>
    </div>
  );
}

export default App;
