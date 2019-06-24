import React from 'react';
import CardGroup from '../CardGroup/index';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteItem } from '../../store/actions/groupActions'



const GroupOrder = (props) => {
  const CardGroupList = props.groups.map((v) => {
    return (
      <div key={v._id} className="col-md-4">
        <CardGroup
          delitem={() => props.deleteItem(v._id)}
          data={v}
        />
      </div>
    );
  });

  return (
    <div className="menu-card">
      <div className="container">
        <div className="row">
          {CardGroupList}
          <div className="col-md-4">
            <div className="menu-card__item  menu-border">
              <div className="menu-card__item-add text-center">
                <p>Add Group Order</p>
                <NavLink to="/groupform" className="fa fa-plus-circle fa-3x"></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

function mapStateToProps(state) {
  return {
    groups: state.group.groups
  }
}
function mapActionsToProps(dispatch) {
  return bindActionCreators({
    deleteItem
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(GroupOrder);
