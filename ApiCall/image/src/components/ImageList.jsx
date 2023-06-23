import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return ( 
        <div>
            {imagesPlaceholder.map((image)=>{
                 return  <ImageItem image={image}/>
                })}
        </div>
     );
}

export default ImageList;