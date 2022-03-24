import React from 'react';
import Products from './productData.json';

function Product(){
    return (
<main className="content">

<div className = "products">
            <div className = "container">
                <h1 className = "title">Soccer Gears</h1>
                <p className = "text-light">Whether you’re a first time player or looking to get a bit more serious in your soccer career, Soccer United has a full stock of soccer shoes to help you be the best player you can be.</p>

                <div className = "product-items">
                   {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/pump.jpeg" alt = "product image"> </img>
                            </div>
                        </div>
                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Nike Air Pump</a>
                            <p className = "product-price">$ 9.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                    
                    {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/goal1.png" alt = "product image"> </img> 
                            </div>
                           
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                    
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Small Goal Post</a>
                            <p className = "product-price">$ 199.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                   
                    {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/goal2.png" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Soccer Goal Post</a>
                            <p className = "product-price">$ 399.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                  
                     {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/shin.jpeg" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Nike Mercurial</a>
                            <p className = "product-price">$ 20.00</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>

                        
                    </div>
                     {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/cleats1.jpeg" alt = "product image"></img>
                            </div>
                           
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Adidas Superfly</a>
                            <p className = "product-price">$ 120.00</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                    
                  {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/cleats2.jpeg" alt = "product image"></img>
                            </div>
                            
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Nike Premier II FG</a>
                            <p className = "product-price">$ 150.00</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                   
                   {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/cleats3.jpeg" alt = "product image"> </img>
                            </div>
                            
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Nike Mercurial FG</a>
                            <p className = "product-price">$ 130.00</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                    
                    {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/cleats4.jpeg" alt = "product image"></img>
                            </div>
                            
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Nike Phantom</a>
                            <p className = "product-price">$ 110.00</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>

                        
                    </div>
                  
                    {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/kit1.jpeg" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Barcelona Home kit</a>
                            <p className = "product-price">$ 89.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>

                        
                    </div>
                    
                     {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/kit2.jpeg" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Real Madrid Home kit</a>
                            <p className = "product-price">$ 89.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                   
                    {/* single product  */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/kit3.jpeg" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Bayern Munich Home kit</a>
                            <p className = "product-price">$ 89.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                    
                  {/* single product */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product_img">
                                <img src = "img/kit4.jpeg" alt = "product image"></img>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "starRating">Ratings</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product_name">Liverpool Home Kit</a>
                            <p className = "product-price">$ 89.99</p>
                            <button type = "button" className = "buyButton"> buy now
                                <span><i className = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>

                       
                    </div>
                     {/* end of product */}
                </div>
            </div>
        </div>

        <div className = "product-collection">
            <div className = "container">
                <div className = "product-collection-wrapper">
                     {/* product col left */}
                    <div className = "product-col-left flex">
                        <div className = "product-col-content">
                            <h2 className = "md-title">men's collection </h2>
                            <p className = "text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
                            <button type = "button" className = "btn-dark">Shop now</button>
                        </div>
                    </div>

                  {/* product col right  */}
                    <div className = "product-col-right">
                        <div className = "product-col-r-top flex">
                            <div className = "product-col-content">
                                <h2 className = "md-title">women's collection </h2>
                                <p className = "text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
                                <button type = "button" className = "btn-dark">Shop now</button>
                            </div>
                        </div>

                        <div className = "product-col-r-bottom">
                             {/* left */}
                            <div className = "flex">
                                <div className = "product-col-content">
                                    <h2 className = "starRating"> </h2>
                                    <h2 className = "md-title"> </h2>
                                    <button type = "button" className = "btn-dark">Shop now</button>
                                </div>
                            </div>
                            {/* right  */}
                            <div className = "flex">
                                <div className = "product-col-content">
                                    <h2 className = "starRating">summer sale </h2>
                                    <h2 className = "md-title">best sellers </h2>
                                    
                                    <button type = "button" className = "btn-dark">Shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>
    )
}

export default Product;