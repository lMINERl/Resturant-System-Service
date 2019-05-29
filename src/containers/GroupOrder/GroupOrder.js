import React, { useState } from 'react';
import CardGroup from '../../components/CardGroup/index';
const GroupOrder = (props) => {
  // return (<div>group order</div>);
  const [state, setState] = useState({
    items: [
      {
        id: "a287319",
        name: 'KFC3',
        day: 'Friday',
        date: '22/4/2019',
        time: '01:00AM'
      },
      {
        id: "a287311239",
        name: 'Group',
        day: '-',
        date: '-/-/-',
        time: '-:-'
      },
      {
        id: "a212387319",
        name: 'KFC',
        day: 'Monday',
        date: '23/4/2019',
        time: '04:00AM'
      }
    ]
  });

  const delItem = (id) => {
    const nArray = state.items.filter((i) => {
      return i.id !== id;
    });
    setState({
      ...state,
      items: nArray
    });
  }

  const CardGroupList = state.items.map((v) => {
    return (
      <div key={v.id} className="col-md-3">
        <CardGroup
          delitem={(id) => delItem(id)}
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
          <div className="col-md-3">
            <div className="menu-card__item  menu-border">
              <div className="menu-card__item-add text-center">
                <p>Add Restaurant</p>
                <i className="fa fa-plus-circle fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export default GroupOrder;
