import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"
import wp1 from "../../assets/wp/wp1.jpg"
import freeshipping from "../../assets/Free shipping.png"
import a24 from "../../assets/f24.gif"
import f3 from "../../assets/f3.png"
import f2 from "../../assets/f2.png"
import f4 from "../../assets/f4.png"
import f5 from "../../assets/f5.png"
import Accessories from "../../assets/banner/accesories.png"
import c1 from "../../assets/gaming cpu/c1.jpg"
import c2 from "../../assets/gaming cpu/c2.jpg"
import c3 from "../../assets/gaming cpu/c3.jpg"
import hpg1 from "../../assets/gaming cpu/HP Victus 15L Gaming.jpg"
import hpo2 from "../../assets/gaming cpu/hp omen2.jpg"
import Antivirus from "../../assets/banner/antivirus.jpg"
import Drivers from "../../assets/banner/Driver-Updating-Software.jpg"


export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <section id="hero">
                    <h4>Trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h1>On all Products</h1>
                    <p>Save with coupns & up to off!</p>
                    <a href=""><button>Shop Now</button></a>

                </section>

                <section id="feature" class="section-p1">
                    <div class="fe-box">
                        <img src={freeshipping} alt='' />
                        <h6>Free Shipping</h6>
                    </div>

                    <div class="fe-box">
                        <img src={f2} alt='' />
                        <h6>Online Order</h6>
                    </div>

                    <div class="fe-box">
                        <img src={f3} alt="" />
                        <h6>Save Money</h6>
                    </div>

                    <div class="fe-box">
                        <img src={f4} alt="" />
                        <h6>Promotion</h6>
                    </div>

                    <div class="fe-box">
                        <img src={f5} alt="" />
                        <h6>Happy Sell</h6>
                    </div>

                    <div class="fe-box">
                        <img src={a24} alt='' />
                        <h6>F24/7 Support</h6>
                    </div>


                </section>
                <section id="Product1" class="section-p1">
                    <h2>Featured Products</h2>
                    <p></p>
                    <div class="pro-container">
                        <div class="pro">
                            <img src={c1} alt="" />
                            <div class="des">
                                <span>New Brand</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹80,000</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>


                        </div>
                        <div class="pro">
                            <img src={c2} alt="" />
                            <div class="des">
                                <span>50% off</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹99,000</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={c3} alt="" />
                            <div class="des">
                                <span>70%</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹499</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={hpg1} alt="" />
                            <div class="des">
                                <span>70%</span>
                                <h5>HP Victus 15L Gaming</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹499</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={hpo2} alt="" />
                            <div class="des">
                                <span>70%</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹2,64,309</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={c3} alt="" />
                            <div class="des">
                                <span>70%</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹499</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={hpg1} alt="" />
                            <div class="des">
                                <span>70%</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹499</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>
                        <div class="pro">
                            <img src={c2} alt="" />
                            <div class="des">
                                <span>Diwali offer</span>
                                <h5>Gaming CPU</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹1,599</h4>
                            </div>
                            <button class="button-33">Buy</button>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>

                        <div class="card-group">
                            <div class="card">
                                <img src={Accessories} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Accessories</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Antivirus} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Antivirus Software</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Drivers} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Driver Software</h5>
                                    <p class="card-text">Comming Soon</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                



            </div>
          
        </div>
       
       

    )
}
