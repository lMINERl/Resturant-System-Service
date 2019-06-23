import React, { useState } from "react";

const AccordionItem = props => {
  const [isOpend, setIsOpened] = useState(
    props.data.groupUsers.map(v => false)
  );

  if (!props.data.groupUsers) {
    return <div>Not Found</div>;
  }
  const orderedFoods = groupUser => {
    return groupUser.ordererdFoods.map((o, index) => {
      return (
        <div key={index}>
          <p className="accordion-item__paragraph">{o.foodname}</p>
          <p className="accordion-item__paragraph">{o.price}</p>
        </div>
      );
    });
  };
  const changeView=(index)=>{
    const newState = [...isOpend];
    newState[index] = !newState[index];
    setIsOpened(newState);
  }
  let groups = props.data.groupUsers.map((g, index) => {
    return (
      <div
      key={index}
      className={`accordion-item ${isOpend[index] && "accordion-item--opened"}`}
      onClick={() => {
        changeView(index);
      }}
    >
        <div className="accordion-item__line">
          <h3 className="accordion-item__title">{g.username}</h3>
          <p>{g.totalPrice}</p>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">{orderedFoods(g)}</div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h2>{props.data.name}</h2>
      {groups}
      </React.Fragment>
  );
};

export default AccordionItem;
