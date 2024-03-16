import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Product.css"
import Footer from '../../Components/Footer/Footer'
import c1 from "../../assets/gaming cpu/c1.jpg"
import c2 from "../../assets/gaming cpu/c2.jpg"
import c3 from "../../assets/gaming cpu/c3.jpg"
import hpg1 from "../../assets/gaming cpu/HP Victus 15L Gaming.jpg"
import hpo2 from "../../assets/gaming cpu/hp omen2.jpg"
export default function Product() {
  return (
    <div>
      <Navbar />
      <div>
        <section id="title-bg">
          <div class="six">
            <h1 className='title h1'>Featured Products
              <span>Gaming Cpu</span>
            </h1>
          </div>
        </section>
        {/* Product */}
        <section id="Product1" class="section-p1">

          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>

        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>YourName</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src={c1} alt="" />
              <div class="des" >
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
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


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
                <h5>Gaming CPU 5</h5>
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
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
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
          </div>

        </section>

      </div>
      <Footer />
    </div>
  )
}
