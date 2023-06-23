import "./App.css";
import SearchHeader from "./searcj-header";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";


function App() {
  const handleSubmit = async (term) => {
    const [images, setImages] = useState([]);
    console.log(term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
