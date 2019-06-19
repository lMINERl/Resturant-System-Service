import React from "react";
import { connect } from "react-redux";
import CheckBox from "../CheckBox/index";
import { bindActionCreators } from "redux";
import { addCheckedCategory } from "../../store/actions/categoryActions";

const SideBar = props => {
  const handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    props.addCheckedCategory(item, isChecked);
  };
  let Categorieslist = props.Categories.map(c => {
    return (
      <React.Fragment key={c._id}>
        <li className="form-group sidebar__list__item">
          <label className="control control--checkbox">
            {c.name}
            <CheckBox
              name={c.name}
              checked={props.checkedItems.get(c.name)}
              onChange={handleChange}
            />
            <div className="control__indicator" />
          </label>
        </li>
        <hr />
      </React.Fragment>
    );
  });
  return (
    <div className="sidebar">
      <h2 className="sidebar__headline mb-5">Categories</h2>
      <form className="text-center">
        <ul className="sidebar__list">{Categorieslist}</ul>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Categories: state.category.categories,
    checkedItems: state.category.checkedItems
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      addCheckedCategory
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(SideBar);
