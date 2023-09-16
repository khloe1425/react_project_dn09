import React, { Component } from 'react'

export default class ProductItemCart extends Component {
  render() {
    console.log(this.props);

    let { image, name, price } = this.props.product;

    let {product, addToCart} = this.props;
    
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button onClick={() => { 
            
              addToCart(product);

           }} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    )
    
  }
}
