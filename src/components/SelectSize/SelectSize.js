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
            type="radio"
            name={`checksize${props.comId}`}
            value={props.names[index]}
            defaultChecked={props.size === index}
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
