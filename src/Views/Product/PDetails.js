import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./PDetails.css"
import c1 from "../../assets/gaming cpu/c1.jpg"
import c2 from "../../assets/gaming cpu/c2.jpg"
import c3 from "../../assets/gaming cpu/c3.jpg"
import hpg1 from "../../assets/gaming cpu/HP Victus 15L Gaming.jpg"
import hpo2 from "../../assets/gaming cpu/hp omen2.jpg"
export default function PDetails() {
   
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');
    
    window.addEventListener('DOMContentLoaded', () => {
        allHoverImages[0].parentElement.classList.add('active');
    });
    
    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () =>{
            imgContainer.querySelector('img').src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('active');
        });
    });
    
    function resetActiveImg(){
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }
  return (
    <div>
    <Navbar />
        <div>
      <div className= "main-wrapper">
        <div className= "Product-container">
            <div className= "product-div">
                <div className= "product-div-left">
                    <div className= "img-container">
                        <img src={c1} alt = "CPU"/>
                    </div>
                    <div className= "hover-container">
                        <div><img src={c1}/></div>
                        <div><img src={c2}/></div>
                        <div><img src={c3}/></div>
                        <div><img src={hpg1}/></div>
                        <div><img src={hpo2}/></div>
                    </div>
                </div>
                <div className= "product-div-right">
                    <span className= "product-name">(New) Analog Watch - For Men</span>
                    <span className= "product-price">$ 50.25</span>
                    <div className= "product-rating">
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                    <p className= "product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    <div className= "btn-groups">
                        <button type = "button" className= "add-cart-btn"><i className= "fas fa-shopping-cart"></i>add to cart</button>
                        <button type = "button" className= "buy-now-btn"><i className= "fas fa-wallet"></i>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>    </div>
  )
}
