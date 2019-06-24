import * as actionTypes from "../actions/groupActions";

const initialState = {
  groups: [
    {
      _id: "a287319",
      name: "McDonald's",
      day: "Monday",
      date: "24/6/2019",
      groupUsers: [
        {
          username: "Israa",
          totalPrice: 90,
          ordererdFoods: [
            { foodname: "Chicken McNuggets", price: 90 }
          ]
        },
        {
          username: "Mohammed",
          totalPrice: 150,
          ordererdFoods: [{ foodname: "Grand Share Box", price: 150 }]
        },
        {
          username: "Mahmoud",
          totalPrice: 90,
          ordererdFoods: [
            { foodname: "Chicken McNuggets", price: 90 }
          ]
        },
        {
          username: "Fatma",
          totalPrice: 240,
          ordererdFoods: [
            { foodname: "Chicken McNuggets", price: 90 },
            { foodname: "Grand Share Box", price: 150 }
            
          ]
        },
        {
          username: "Aya",
          totalPrice: 240,
          ordererdFoods: [
            { foodname: "Grand Share Box", price: 150 }    
          ]
        }
      ],
      time: "03:00AM",
      location: "location1"
    },
    {
      _id: "a212387319",
      name: "KFC",
      day: "Monday",
      date: "24/6/2019",
      groupUsers: [
        {
          username: "Heba",
          totalPrice: 70,
          ordererdFoods: [
            { foodname: "Dinner Box", price: 70 }     
          ]
        },
        {
          username: "Mohammed",
          totalPrice: 170,
          ordererdFoods: [{ foodname: "Shrimp Meal", price: 100 },{ foodname: "Toasted Twister", price: 70 }]
        }
      ],
      time: "04:00PM",
      location: "location3"
    } ,
    {
      _id: "a2873190",
      name: "Domino's Pizza",
      day: "Tuesday",
      date: "25/4/2019",
      groupUsers: [
        {
          username: "Sara",
          totalPrice: 115,
          ordererdFoods: [
            { foodname: "Chicken Legend Pizza", price: 50 },
            { foodname: "Meatzza Pizza", price: 65 }
          ]
        },
        {
          username: "Mohammed",
          totalPrice: 100,
          ordererdFoods: [{ foodname: "Shrimp Superb Cheese Pizza", price: 35 },{ foodname: "Meatzza Pizza", price: 65 }]
        }
      ],
      time: "06:00PM",
      location: "location1"
    }
  ],
  selectedGroup: null,
  pageSize: 5,
  currentPage: 1
};

const groupsReducer = (state = initialState, action) => {
  let groups = [...state.groups];
  let selectedGroup = null;
  let pageSize = state.pageSize;
  let currentPage = state.pageSize;
  switch (action.type) {
    case actionTypes.ADD_GROUP:
      {
        const date = new Date();
        const [dayStr] = date.toDateString().split(" ");
        const time = date.toLocaleTimeString();
        const numeralDate = date.toLocaleDateString();

        const data = { ...action.payload };
        groups.push({
          ...data,
          day: dayStr,
          date: numeralDate,
          time: time
        });
      }
      break;

    case actionTypes.UPDATE_ITEM:
      {
        const updatedItem = { ...action.payload };
        const index = groups.findIndex(el => el._id === updatedItem._id);
        if (index !== -1) groups[index] = updatedItem;
      }
      break;

    case actionTypes.DELETE_ITEM:
      {
        const _id = action.payload;
        const itemIndex = groups.findIndex(el => el._id === _id);
        if (itemIndex !== -1) {
          groups = [].concat(
            groups.slice(0, itemIndex),
            groups.slice(itemIndex + 1, groups.length)
          );
        }
      }
      break;

    case actionTypes.GET_GROUP_BY_ID:
      {
        const _id = action.payload;
        const itemindex = groups.findIndex(el => el._id === _id);
        if (itemindex !== -1) selectedGroup = { ...groups[itemindex] };
      }
      break;
    case actionTypes.ADD_RESTAURANT_TO_GROUP:
      {
        const { _id, name } = { ...action.payload };
        const index = groups.findIndex(g => g._id === _id);
        if (_id && index === -1) {
          const date = new Date();
          const [dayStr] = date.toDateString().split(" ");
          const time = date.toLocaleTimeString();
          const numeralDate = date.toLocaleDateString();

          groups.push({
            _id: _id,
            name: name,
            day: dayStr,
            date: numeralDate,
            time: time
          });
        }
      }
      break;
    case actionTypes.CHANGE_PAGE:
      currentPage = action.payload;
      break;
    case action.ERROR:
      break;
    default:
      break;
  }
  return {
    ...state,
    groups: groups,
    selectedGroup: selectedGroup,
    pageSize: pageSize,
    currentPage: currentPage
  };
};

export default groupsReducer;
