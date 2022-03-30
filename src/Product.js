import React from 'react';
// import productList from './productData.json';
import axios from 'axios'


export default class Product extends React.Component{
    state={
        productdata:[],
    }
    componentDidMount(){
        axios.get('/api/products').then(res =>{
            this.setState({productdata: res.data})
        })
    }
    render(){
    return (
<main className="content">
<div className="filterBtn">
    <form>
        <label>Sort By:</label>
        <select name="list" id="list">
            <option value="product.js">All</option>
            <option value="Equipments">Equipments</option>
            <option value="Cleats">Cleats</option>
            <option value="Jerseys">Jerseys</option>
             </select>
                 </form>
                 </div>

<div className = "products">

            <div className = "container">
                <h1 className = "title">Soccer Gears</h1>
                <p className = "text-light">Whether you’re a first time player or looking to get a bit more serious in your soccer career, Soccer United has a full stock of soccer shoes to help you be the best player you can be.</p>

                <div className = "product-items">
                 {
                    this.state.productdata.map((card) => {
                         return(
                            <div className = "product">
                            <div className = "product-content">
                                <div className = "product_img">
                                    <img src = {card.image}alt = {card.name}/> 
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
                                <a href = "#" className = "product_name">{card.name}</a>
                                <p className = "product-price">${card.price}</p>
                                <button type = "button" className = "buyButton"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                         )
                     })
                 }
                     
                </div>
            </div>
        </div>

        <div className = "product-collection">
            <div className = "container">
                <div className = "product-collection-wrapper">
                     
                    <div className = "product-col-left flex">
                        <div className = "product-col-content">
                            <h2 className = "md-title">men's collection </h2>
                            <p className = "text-light2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
                            <button type = "button" className = "btn-dark">Shop now</button>
                        </div>
                    </div>

                  
                    <div className = "product-col-right">
                        <div className = "product-col-r-top flex">
                            <div className = "product-col-content">
                                <h2 className = "md-title">women's collection </h2>
                                <p className = "text-light2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
                                <button type = "button" className = "btn-dark">Shop now</button>
                            </div>
                        </div>

                        <div className = "product-col-r-bottom">
                             
                            <div className = "flex">
                                <div className = "product-col-content">
                                    <h2 className = "starRating"> </h2>
                                    <h2 className = "md-title"> </h2>
                                    <button type = "button" className = "btn-dark">Shop now</button>
                                </div>
                            </div>
                            
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
}

