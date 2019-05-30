import React, { useState } from 'react';
import CardFood from '../../components/CardFood/index';

const CardListing = (props) => {
  // from database
  const [state, setState] = useState({
    menu: [
      {
        id: 'falhpaiow1241231',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        img:null,
        rating: 4,
        size: 0,
        sizes: [`small`, `meduim`, `large`],
        amount: 0
      },
      {
        id: 'falhpaiow12412',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 0,
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 0
      },
      {
        id: 'falhpaiow123124',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 0,
        sizes: [`small`, `large`],
        amount: 0
      }, {
        id: 'falhpaiow1241',
        name: 'Cheese Burger',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 0,
        sizes: [`small`, `meduim`, `large`],
        amount: 0
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

  const menuListing = state.menu.map((v, index) => {
    return (
        <CardFood
          data={v}
          setsize={(id, size) => setSize(id, size)}
          setrating={(id, rating) => setRating(id, rating)}
          setamount={(id, amount) => setAmount(id, amount)}
          key={v.id}
        />
    );
  });

  return (
    <div className="menu-card">
      <div className="container">
        <div className="row">
          {menuListing}
        </div>
      </div>
    </div>
  );

}

export default CardListing;
