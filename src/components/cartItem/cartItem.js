
import React from 'react';
import {Button} from 'reactstrap';
import './cardItem.css'
class CartItem extends React.Component {

    render() {
        return (
            // <div classNameName='cartItem'>
            //     <Row>
            //         <Col xs={12} sm={6}>
            //             <h5>{this.props.cartItem.name} <Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
            //         </Col>
            //         <Col xs={6} sm={4}>
            //             <p>units :&nbsp;
            //                 <Label bsStyle='success'> {this.props.cartItem.units} </Label>
            //                 &nbsp;
            //                 <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
            //                 <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
            //             </p>
            //         </Col>
            //         <Col xs={6} sm={2}>
            //             <Button onClick={() => this.props.handleDeleteFromCart()}
            //                     bsSize='small' bsStyle='danger'>DEL</Button>
            //         </Col>
            //     </Row>
            // </div>
           
                <div className="order-bill">
                    
                   
                        
                            <div className="order-bill__data">
                                <div className="order-bill__info margin-bottom">
                                    <i className="fa fa-trash"></i>
                                    <span className="order-bill__order">{this.props.cartItem.name}</span>
                                    <span className="order-bill__total">Amount</span>
                                    <span className="order-bill__total">Price</span>
                                </div>
                                <div className="order-bill__info">
                                    <i className="fa fa-check-circle color-primary"></i>
                                    <span className="order-bill__size">Size</span>
                                    <span className="order-bill__dash"></span>
                                    <span className="order-bill__size">{this.props.cartItem.size}</span>
                                    <span className="order-bill__dash-no">{this.props.cartItem.amount}</span>
                                    
                                    <span className="order-bill__price">{this.props.cartItem.price}</span>
                                    <Button onClick={() => this.props.onAddUnit()}>+</Button>
                                    <Button onClick={() => this.props.onDeductUnit()}>-</Button>
                                    <Button onClick={() => this.props.handleDeleteFromCart()}>DEL</Button>
                                </div>
                                
                                
                            </div>
                        </div>
                   
            

        );
    }
}

export default CartItem;