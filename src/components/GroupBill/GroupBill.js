import React from "react";
import { connect } from "react-redux";
import AccordionItem from "../../components/AccordionItem";

const GroupBill = props => {
  let orderlist = props.data ? (
    props.data.map((o, index) => {
      return (
        <div className="accordion-list__item" key={o._id}>
          <AccordionItem data={o} />
        </div>
      );
    })
  ) : (
    <div>not found</div>
  );
  return (
    <div className="wrapper">
      <ul className="accordion-list">{orderlist}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    data: state.group.selectedGroup
  };
}
export default connect(mapStateToProps)(GroupBill);
