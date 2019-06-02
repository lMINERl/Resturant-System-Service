// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import CardResturant from "../../components/CardResturant";
// import logo from "../../assets/logo.svg";
// import Filter from "../../components/Filter";

// const RestaurantListing = props => {
//   const [state, setState] = useState({
//     restaurants: [
//       {
//         id: "falhpaiow1241",
//         name: "KFC",
//         imgUrl: logo,
//         rating: 4,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         city: "cairo"
//       },
//       {
//         name: "MAC",
//         imgUrl: "",
//         rating: 3,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         city: "alex"
//       },
//       {
//         id: "falhpaiow1243",
//         name: "KFC",
//         imgUrl: "",
//         rating: 4,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         city: "ismailia"
//       },
//       {
//         id: "falhpaiow12sda4",
//         name: "KFC",
//         imgUrl: "",
//         rating: 4,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         city: "ismailia"
//       },
//       {
//         id: "falhpaiow1245",
//         name: "KFC",
//         imgUrl: "",
//         rating: 4,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         city: "suez"
//       }
//     ]
//   });

// const mapStateToProps= (state)=>{
//   console.log(state.reducer.current)
//    return {
//       restaurants : state.reducer.restaurants ,
//       pageSize : state.reducer.pageSize,
//       currentPage : state.reducer.currentPage,
     
      
//   }
//  }
//  const mapDispatchToProps = dispatch => {
//   return {
//       onPageChange: (currentPage) =>
//       dispatch({
//         type: "CHANGECURRENT",
//         payload: currentPage
//       })
//     }}
// // const RestaurantListing = props => {
  
//   // const setRating = (id, rating) => {
//     // const index = state.restaurants.findIndex(v => {
//     //   return v.id === id;
//     // });
//     // if (
//     //   state.restaurants[index].rating > -1 &&
//     //   state.restaurants[index].rating < 5
//     // ) {
//     //   const nArray = [...state.restaurants];
//     //   nArray[index] = {
//     //     ...state.restaurants[index],
//     //     rating: rating
//     //   };
//     //   setState({
//     //     ...state,
//     //     restaurants: nArray
//     //   });
//   //   }
//    };
   
//    const Restaurants = paginate(props.restaurants,props.currentPage,props.pageSize)
//    let restaurantList = Restaurants.map(r => {
//     return (
//       <CardResturant
//         setrating={(id, rating) => setRating(id, rating)}
//         key={r.id}
//         resturant={r}
//       />
//     );
//   });
//   return (
//     <>
//       <div>
//         {" "}
//         <Filter />{" "}
//       </div>
//       <h2 className="listing-header">
//         All Restaurants
//         <NavLink
//           to="/resturantform"
//           className="badge badge-warning listing-header__btn "
//         >
//           <i className="fa fa-plus-square" />
//           Add Restaurant
//         </NavLink>
//       </h2>
//       <div className="menu-card">
//         <div className="container">
//           <div className="row">{restaurantList}</div>
//         </div>
//         <Pagination itemCount={props.restaurants.length} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange}/>
//       </div>
//     </>
//   );
// };
// export default connect(mapStateToProps,mapDispatchToProps)(RestaurantListing);
