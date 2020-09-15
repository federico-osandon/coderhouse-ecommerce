import React from "react";

import ListItem from '../components/ListItem';

export default function Home() {   
    
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/XJ4WNyT/Ecommerce-original.jpg" className="d-block w-100" alt="..." />
                    </div>                    
                </div>
            </div>             
            <br />
            
            <ListItem />

            
        </>
    );
}
