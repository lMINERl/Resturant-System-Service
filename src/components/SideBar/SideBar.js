import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFilteredItems } from "../../store/actions/foodActions";

const SideBar = props => {
  const [checklist, setCheckList] = useState([]); // array of boolean for input component
  const [categoryList, setCategoryList] = useState([]); // array of str for reducer filter
  const categories = props.categories;

  const onChangeCheck = (index, checkName) => {
    const nCheckList = [...checklist];
    nCheckList[index] = !nCheckList[index];

    setCategoryList(
      categoryList
        .concat(categories.find(v => (v ? v.name === checkName : false)))
        .map(v => (v ? v.name : []))
    );
    setCheckList(nCheckList);
    props.getFilteredItems(categoryList, "category", !nCheckList[index]);
  };

  let Categorieslist = categories.map((c, i) => {
    return (
      <React.Fragment key={c._id}>
        <li className="form-group sidebar__list__item">
          <label className="control control--checkbox">
            {c.name || `All`}
            <input
              type="checkbox"
              name={c.name || `All`}
              checked={checklist[i] || false}
              onChange={() => onChangeCheck(i, c.name)}
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
    categories: state.category.categories
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      getFilteredItems
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(SideBar);
