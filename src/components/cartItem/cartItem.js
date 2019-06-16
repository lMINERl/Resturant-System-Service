import React from 'react';
import './cardItem.css'
class CartItem extends React.Component {

    render() {
        return (
            <div className="order-bill ">
                <div className="order-bill__data">
                    <div className="order-bill__info margin-bottom d-flex justify-align-content-around">
                        <i className="fa fa-trash button color-secondary" onClick={() => this.props.handleDeleteFromCart()}></i>
                        <span className="order-bill__order">{this.props.cartItem.name}</span>
                        <span className="order-bill__total">Amount</span>
                        <span className="order-bill__total">Price</span>
                    </div>
                    <div className="order-bill__info">
                        <i className="fa fa-check-circle color-primary"></i>
                        <span className="order-bill__size">Size</span>
                        <span className="order-bill__dash"></span>
                        <span className="order-bill__size">{this.props.cartItem.sizes[this.props.cartItem.size]}</span>
                        <span className="order-bill__dash-no">{this.props.cartItem.amount}</span>

                        <span className="order-bill__price">{this.props.cartItem.price[this.props.cartItem.size]}</span>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.onAddUnit()}>+</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.onDeductUnit()}>-</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.handleDeleteFromCart()}>DEL</button>
                    </div>
                </div>
            </div>



        );
    }
}

export default CartItem;