import React from "react";

const imagelist = props => {
    const images  = props.image.map((image)=>{
return <img src = {image.urls.regular}/>
    });

return <div> {images}</div>

};

export default imagelist;