import React from 'react'
import "../styles/Art.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";

const Art = () => {

    const importAll = (r) => {
        return r.keys().map(r);
      };
    
    const drawings = importAll(require.context('./../../public/assets/art', false, /\.(png|jpe?g|JPG)$/));
    

    
    return (
        <div id="art">
            <div className="section-header ">
                <span className="section-title">/ my art!</span>
            </div>
            <Carousel>
                {Object.keys(drawings).map((image, index) => (
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image.default}
                            alt={`Art ${index}`}
                        />
                        <div className="caption-bg">
                            <Carousel.Caption>
                                <h3>sdsd</h3>
                                console.log(image.default.split('/').pop().split('.')[0])
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>


    )
}

export default Art