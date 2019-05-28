import React from 'react';

const SelectSize = (props) => {
  const Size = props.names.map((v, index) => {
    return (
      <div key={index} className="menu-card__size-data">
        <label
          htmlFor={`radiosize${props.comId}${index}`}
          className="menu-card__option-size"
          onClick={() => props.select(index)} >

          <input
            id={`radiosize${props.comId}${index}`}
            onChange={() => { console.log(`require change`); }}
            type="radio"
            name={`checksize${props.comId}`}
            checked={index === props.size}
          />

          <span className="menu-card__option"></span>{v}
        </label>
      </div>
    );
  });

  return (
    [Size]
  );
};

export default SelectSize;
