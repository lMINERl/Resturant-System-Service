import React, { useState } from "react";

const AccordionItem = props => {
  const data = props.data.groupUsers;
debugger;
  const [isOpend, setIsOpened] = useState(
    data ? props.data.groupUsers.map(v => false) : []
  );

  if (!isOpend.length) {
    return <div>Not Found</div>;
  }

  const orderedFoods = groupUser => {
    return groupUser.ordererdFoods.map((o, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-9">
              <p className="accordion-item__paragraph">{o.foodname}</p>
            </div>
            <div className="col-3">
              <p className="accordion-item__paragraph">{o.price}</p>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };
  const changeView = index => {
    const newState = [...isOpend];
    newState[index] = !newState[index];
    setIsOpened(newState);
  };
  let groups = props.data.groupUsers.map((g, index) => {
    return (
      <div
        key={index}
        className={`accordion-item ${isOpend[index] &&
          "accordion-item--opened"}`}
        onClick={() => {
          changeView(index);
        }}
      >
        <div className="accordion-item__line row">
          <div className="col-9">
            {" "}
            <h3 className="accordion-item__title">{g.username}</h3>
          </div>
          <div className="col-3">
            <p> Total Price :{g.totalPrice}</p>
          </div>
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
