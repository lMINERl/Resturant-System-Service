import React, { useState } from 'react';
import CardFood from '../../components/CardFood/index';
import Cart from '../../components/OrderBill/OrderBill';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions'
import { bindActionCreators } from 'redux'
const CardListing = (props) => {
  // from database
  const [state, setState] = useState({
    menu:[
       
      {
        id: 'falhpaiow1241231',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 54.00,
        img:null,
        rating: 4,
        size: 'medium',
        sizes: [`small`, `meduim`, `large`],
        amount: 1
      },
      {
        id: 'falhpaiow12412',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 100.00,
        rating: 4,
        size: 'small',
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 1
      },
      {
        id: 'falhpaiow12413',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 'large',
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 1
      },
      {
        id: 'falhpaiow12414',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 'large',
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 1
      }
    
  ]
  });

  const setAmount = (id, amount) => {
    if (amount < 10 && amount > -1) {

      const index = state.menu.findIndex((v) => {
        return v.id === id;
      });
      const nArray = [...state.menu];
      nArray[index] = {
        ...state.menu[index],
        amount: amount
      };
      setState({
        ...state,
        menu: nArray
      });

    }
  }
 
  const setRating = (id, rating) => {

    const index = state.menu.findIndex((v) => {
      return v.id === id;
    });

    if (state.menu[index].rating > -1 && state.menu[index].rating < 5) {
      const nArray = [...state.menu];
      nArray[index] = {
        ...state.menu[index],
        rating: rating
      };
      setState({
        ...state,
        menu: nArray
      });

    }
  }
  const setSize = (id, size) => {
    const index = state.menu.findIndex((v) => {
      return v.id === id;
    });
    const nArray = [...state.menu];
    nArray[index] = {
      ...state.menu[index],
      size: size
    };
    setState({
      ...state,
      menu: nArray
    });
  }
function dispatchAddToCart(cardItem){
  props.addToCart(cardItem)
}
  const menuListing = state.menu.map((v, index) => {
    return (
        <CardFood
          handleOnAdd={dispatchAddToCart.bind(this)}
          data={v}
          setsize={(id, size) => setSize(id, size)}
          setrating={(id, rating) => setRating(id, rating)}
          setamount={(id, amount) => setAmount(id, amount)}
          key={v.id}
        />
    );
  });
  // const handleChange = (id,event) => {
  //   const index = state.menu.findIndex((v) => {
  //     return v.id === id;
  //   });
  //   const nArray = [...state.menu];
  //   nArray[index] = {
  //     ...state.menu[index],
  //     size:  event.target.value
  //   };
  //   setState({
  //     ...state,
  //     menu: nArray
  //   });
  //   console.log(state)
  // }
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
function mapActionsToProps(dispatch) {
  return bindActionCreators({
      addToCart
  }, dispatch);
}

export default connect(null,mapActionsToProps)(CardListing);
