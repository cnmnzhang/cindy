import React from 'react'
import "../styles/Art.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";

const Art = () => {

    // const importAll = (r) => {
    //     return r.keys().map(r);
    //   };
    // const drawings = importAll(require.context('./../../public/assets/art', false, /\.(png|jpe?g|JPG)$/));

    const drawings = ['./../../public/assets/art/cherries.JPG',
        './../../public/assets/art/crane.JPG',   
        './../../public/assets/art/horse.JPG',  
        './../../public/assets/art/horses.JPG',  
        './../../public/assets/art/oyster.JPG',  
        './../../public/assets/art/penguins.JPG',  
        './../../public/assets/art/shark.JPG',  
        ]

    
    return (
        <div id="art">
            <div className="section-header ">
                <span className="section-title">/ my art!</span>
            </div>
            <Carousel>
                {drawings.map((art, index) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={art}
                            alt={`Art ${index}`}
                        />
                        <div className="caption-bg">
                            <Carousel.Caption>
                                <h3>{art.substring(art.lastIndexOf('/') + 1, art.lastIndexOf('.'))}</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>


    )
}

export default Art