import axios from 'axios';
import React, { useState, useEffect } from "react";
export default class Productlist extends React.Component {
    state = {
        products: [],
        type: "All",
        filterText: ""
    }


    componentDidMount() {
        axios.get('http://localhost:4000/api/products').then(res => {
            console.log(res);
            this.setState({ products: res.data });
        });
    }
    filter (type){
        return () => {
            this.setState({type})
        }
    }
    onChange (e){
        this.setState({filterText: e.target.value})
        
    }
    // resetFilterText () {
    //     this.setState({filterText: ""})
    // }
    normalizeString(str) {
        return str.toLowerCase().replace(/\s/g, "")
    }
    render() {
        
        return (
            
            <div>
                <h6>Filter By Category: </h6>
                <div id="filterButtons">
                    <button id="button" className="btn btn-light" onClick={this.filter("All")}>All</button>
                    <button id="button" className="btn btn-light" onClick={this.filter("Equipments")}>Equipments</button>
                    <button id="button" className="btn btn-light" onClick={this.filter("Cleats")}>Cleats</button>
                    <button id="button" className="btn btn-light" onClick={this.filter("Jerseys")}>Jerseys</button>
                </div>
                <div className="search-container">
                <h6>Search By Name:</h6>
                <div className="searchBar"id="fButtons">
                    <input className="searchBox" type="text" value={this.state.filterText} onChange={(e) => this.onChange(e)}></input>

                </div>
                </div>
                <div id="cardAlign" className="row">
                    {
                        this.state.products
                        .filter((record) => {
                            if (this.state.filterText === ""){
                                return true
                            } else{
                                return this.normalizeString(record.Title).includes(this.normalizeString(this.state.filterText))
                            }
                        })
                        .filter((record) => {
                            if (this.state.type === "All"){
                                return true 
                            } else {
                                return this.state.type === record.Category
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}