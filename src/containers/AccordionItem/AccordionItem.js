import React, { Component } from "react";

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }
  render() {
    let groups = this.props.data.groupUsers ? (
      this.props.data.groupUsers.map((g, index) => {
        return (
          <div key={index}>
            <div className="accordion-item__line">
              <h3 className="accordion-item__title">{g.username}</h3>
              <p>{g.totalPrice}</p>
              <span className="accordion-item__icon" />
            </div>
            <div className="accordion-item__inner">
              <div className="accordion-item__content">
                {g.ordererdFoods.map((o, index) => {
                  return (
                    <div key={index}>
                      <p className="accordion-item__paragraph">{o.foodname}</p>
                      <p className="accordion-item__paragraph">{o.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>not found</div>
    );
    return (
      <div
        className={`accordion-item 
              ${this.state.opened && "accordion-item--opened"}`}
        onClick={() => {
          this.setState({ opened: !this.state.opened });
        }}
      >
        <h2>Group Name</h2>
        {groups}
      </div>
    );
  }
}

export default AccordionItem;
