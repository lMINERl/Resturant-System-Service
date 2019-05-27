import React from 'react';

const SelectSize = (props) => {
  const Size = props.names.map((v, index) => {
    return (
      <div key={index} className="menu-card__size-data">
        <label htmlFor={`radiosize${index}`} className="menu-card__option-size">
          <input type="radio" name="checksize" onClick={() => props.select(index)} checked={index === props.selected} id={`radiosize${index}`} />
          <span className="menu-card__option"></span>{v}
        </label>
      </div>
    );
  });

  return (
    [ Size ]
  );
};

export default SelectSize;
