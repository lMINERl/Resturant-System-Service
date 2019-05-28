import React from 'react';


const StarRating = (props) => {

  const MaxRating = Array(props.outof).fill(undefined);
  const Rating = MaxRating.map((val, index) => {
    // return (index < props.rating) ? (<i className="fa fa-star"></i>) : <i className="fa fa-star-o"></i>;
    return <i key={index} onClick={() => props.setRate(index)} className={(index <= props.rating) ? `fa fa-star` : `fa fa-star-o`} ></i>
  });
  return (
    <li className="list-inline-item">
      {Rating}
    </li>
  );

}

export default StarRating;
