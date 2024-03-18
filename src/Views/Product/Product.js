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
              <span>Gaming Setup</span>
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
            <h1>Gaming Monitor</h1>
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
            <h1>Gaming Monitor</h1>
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
        {/* gruop = 3 */}
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>Graphics Cards</h1>
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
        {/* gruop = 4 */}
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>Gaming Laptops</h1>
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
            <h1>Gaming Station</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src="" alt="" />
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
        {/* Gaming Desk */}
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>Gaming Desk</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/71aeyMKS3lL._SX679_.jpg" alt="" />
              <div class="des" >
                <span>New Brand</span>
                <h5>Sunon Z-Shaped Gaming Table with Cup Holder, Headphone Hook, 47 Inch Tabletop for PC Games (Plastic,Black)</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹18,000</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81tSFdC4QnL._SX679_.jpg" alt="" />
              <div class="des">
                <span>50% off</span>
                <h5>DESIGNA Metal 44.5 Inch Led Lights Home Office Desk Gaming Style With Free Mouse Pad, Z-Shaped Professional Computer Desk With Gaming Handle Rack,</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹16,500</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81JnWF-jqPL._SX679_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>EUREKA ERGONOMIC Alloy Steel Metal Finish Gaming Desk 60" Home Office Computer Desk, New Polygon Legs Design</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹24,699</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/71Z+VIBTEdL._SX679_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>EUREKA ERGONOMIC Metal Finish L Shape Computer Simple PC Gaming Table Desk with Cable Management System Large Mouse Pad</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹19,799</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81Io-asNy2L._SX679_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>TEKAVO Gaming Table for Gaming Set up with Upper Storage</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹15,299</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://astrixinc.in/cdn/shop/files/2__06974.1667606495.1280.1280_2048x2048_f80cd632-89a6-44aa-81e6-22cccb01981e_533x.jpg?v=1702302649" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>Eureka Ergonomic Gaming Table- Aero 72 Inches, RGB Lights</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹35,999</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/61BM8pSZldL._SX679_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>Madesa Gaming Computer Desk and Office Table with 5 Shelves and Cable Management, Wood, 136 W x 75 H x 60 D Cm - Black/Blue</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹10,199</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/51p8ldNztFL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
              <div class="des">
                <span>Diwali offer</span>
                <h5>Mr IRONSTONE L Shaped Laminated Engineered Wood Finish Desk, Computer Corner Desk, Home Gaming Desk, </h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹10,599</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
          </div>

        </section>
        {/* Gaming Chair */}
        <section id="Product1" class="section-p1">
          <div class="twelve">
            <h1>Gaming Chair</h1>
          </div>
          <p></p>
          <div class="pro-container">
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81J921SDTdL._SX679_.jpg" alt="" />
              <div class="des" >
                <span>New Brand</span>
                <h5>Lethal Black Gaming Chair - Ergonomic Chair Gaming with RGB Light, Luxurious Velvet Fabric,</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹18,000</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="PDetails"><i class="fal fa-shopping-cart cart"></i></a>


            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81NxrLg1GxL._SX679_.jpg" alt="" />
              <div class="des">
                <span>50% off</span>
                <h5>Dr luxur Weavemonster Ergonomic Gaming Chair for Office Work at Home with Breathable Honey- combed Fabric</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹19,000</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81v5-ARTe-L._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>Dr Luxur Predator Ergonomic Gaming Chair for Home Office with Magnetic Neck Pillow,</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹19,000</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="pro1"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/51CY-OmTD3L._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
              <div class="des">
                <span>70%</span>
                <h5>Dr Luxur Faux Leather Colossus Ergonomic Gaming Chair For Office Work With Lumbar Support</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹17,999</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/71PZ64qocPL._SX679_.jpg" alt="" />
              <div class="des">
                <span>30%</span>
                <h5>The Sleep Company SmartGRID XGen Chair </h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹25,600</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/814lp2R8GNL._SX679_.jpg"  alt="" />
              <div class="des">
                <span>70%</span>
                <h5>DROGO Premium Ergonomic Office Chair for Work from Home</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹24,000</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/712C5J3O5uL._SX679_.jpg" alt="" />
              <div class="des">
                <span>30%</span>
                <h5>Green Soul Assassin Ergonomic Gaming Chair</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹32,999</h4>
              </div>
              <button class="button-33">Buy</button>
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
              <img src="https://m.media-amazon.com/images/I/81UfQ5qwEdL._SX679_.jpg" alt="" />
              <div class="des">
                <span>Diwali offer</span>
                <h5>Dr Luxur</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>₹17,859</h4>
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
