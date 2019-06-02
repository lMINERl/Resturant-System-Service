import React, { Component } from 'react';
import CardFood from '../../components/CardFood/index';
import Cart from '../../components/OrderBill/OrderBill';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions'
import { bindActionCreators } from 'redux'
class MenuListing extends Component {
  // from database
  constructor(props){
    super(props);
    this.state={
      menus:null
    }
  }
  componentDidMount() {
        const menus = this.props.menus.map(r => {
            return r
        });
        if (menus) {
          this.setState({
            menus: menus
          })
        } else {
          this.props.history.push("/")
        }

    
  }

  setAmount = (id, amount) => {
    if (amount < 10 && amount > -1) {

      const index = this.state.menus.findIndex((v) => {
        return v.id === id;
      });
      const nArray = [...this.state.menus];
      nArray[index] = {
        ...this.state.menus[index],
        amount: amount
      };
      this.setState({
        ...this.state,
        menu: nArray
      });

    }
  }
 
  setRating = (id, rating) => {

    const index = this.state.menus.findIndex((v) => {
      return v.id === id;
    });

    if (this.state.menus[index].rating > -1 && this.state.menus[index].rating < 5) {
      const nArray = [...this.state.menus];
      nArray[index] = {
        ...this.state.menus[index],
        rating: rating
      };
      this.setState({
        ...this.state,
        menu: nArray
      });

    }
  }
  setSize = (id, size) => {
    const index =this.state.menus.findIndex((v) => {
      return v.id === id;
    });
    const nArray = [...this.state.menus];
    nArray[index] = {
      ...this.state.menus[index],
      size: size
    };
    this.setState({
      ...this.state,
      menu: nArray
    });
  }
dispatchAddToCart(cardItem){
  this.props.addToCart(cardItem)
}
render(){
    console.log(this.state.menus);
  let menuListing = this.state.menus? (this.state.menus.map((v, index) => {
    return(<CardFood
      handleOnAdd={this.dispatchAddToCart.bind(this)}
      data={v}
      setsize={(id, size) => this.setSize(id, size)}
      setrating={(id, rating) => this.setRating(id, rating)}
      setamount={(id, amount) => this.setAmount(id, amount)}
      key={v.id}
    />)
})):(<div>not found</div>);
 
  return (
    <div className="menu-card">
      <div className="container">
        <div className="row">
          {menuListing}
        </div>
      </div>
      <Cart/>
    </div>
  );
}
  
 

}
function mapActionsToProps(dispatch) {
  return bindActionCreators({
      addToCart
  }, dispatch);
}
function mapStateToProps(state) {
  return {
      menus:state.reducer.menus
  }
}
export default connect(mapStateToProps,mapActionsToProps)(MenuListing);
