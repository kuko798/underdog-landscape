import './Underdog.css';
import { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/css/bundle";



function Body() {
   
    
  
    return (
        <section className="frontpage" id="begin">
        <div className="opener">
        
          
          </div>

    </section>
    );
  }
  


function ListGroup() {
    let items = [
        'Fertilizing',
        'Hedge-Trimming',
        'Weed-Eating',
        'Small Tree Removal',
        'Mowing',
        'Leaf Removal',
        'Mulching',
        'Stump Grinding',
        'Flower-Bed Installation',
        'Weed Control',
        'Aeration'
    ];

    if (items.length === 0)
        return (
            <>
                <h1>Services</h1>
                <p>No services found</p>
            </>
        );

    return (
        
    <section className="serv">
        <section className='services'>
            <h1>Our Services</h1>
            <div className="cardds">
                {items.map((item, index) => (
                    <div className="cardd" key={index}>
    
                        <h3>{item}</h3>
                    </div>
                ))}
            </div>
        </section>
        </section>
    );
}


function Carousel() {
   
  
    return (
      <section className="last">
        <div className="carousel-wrapper">
          
            <div className="photo_carousel">
              <img src="src/IMG_1314.jpeg"/>
              <img src="src/IMG_1321.jpeg"/>
              <img src="src/IMG_1322.jpeg"/>
              <img src="src/IMG_1323.jpeg"/>
              
            </div>
          
        </div>
      </section>
    );
  }
export{Body, ListGroup, Carousel};
