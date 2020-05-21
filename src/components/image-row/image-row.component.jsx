import React from 'react';
import './image-row.styles.css';



const ImageRow = (props) => {
        return(
            
                <div className="Images">
                    <h3>{props.photo.photographer}</h3>
                    <img key={props.photo.id} src={props.photo.src.large} alt="" />
                </div>
              
        )
}



export default ImageRow;