
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteFromCart, updateItemUnits } from '../../store/actions/cartActions';
import CartItem from "../cartItem/cartItem";

class Cart extends React.Component {
    renderCart() {
        return (
            <div style={{overflow:"scroll",height:'80vh'}}>
                {this.cartList()}
            </div>
        );
    }
    handleDeleteFromCart(_id) {

        this.props.deleteFromCart(_id)
    }
    handleDeductUnit(item) {
        this.props.updateItemUnits({
            ...item,
            nAmount: -1
        })
    }
    handleAddUnit(item) {
        this.props.updateItemUnits({
            ...item,
            nAmount: 1
        })
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
                return (
                    <CartItem key={`${cartItem._id}+${cartItem.size}`}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem)}
                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem)} />
                );
            })
        );
    }

    cartTotal() {
        return (
            <div>
                {/* <Row>
                    <Col xs={12} sm={6}>
                        <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
                    </Col>
                </Row> */}
                <div className="row">
                    <div className="col-md-12 align-self-end">
                        <div className="order-bill__check ">
                            <div className="order-bill__check-info">
                                <span className="order-bill__check-subtotal">TotalPrice</span>
                                <span className="order-bill__check-dash"></span>
                                <span className="order-bill__check-price">{this.totalAmount(this.props.cart)}</span>
                            </div>
                            <button className="button button--primary button--block-btn button--small-btn">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    totalAmount(cart) {
        
        return cart.reduce((acum, item) => {
            acum += item.price[item.size] * item.amount;
            return acum;
        }, 0);
    }
    totalCount(cart) {
        return cart.reduce((tcount, item) => {
            tcount += item.amount;
            return tcount;
        }, 0);
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
            <aside className='cart position-absolute orderbill-container'>
                    {this.renderCart()}
                    {this.cartTotal()}
                </aside>
            );
        }

        return (
            <></>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);