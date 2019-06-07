import * as actions from '../actions/groupActions';
import groupsModel from '../../models/group';

const initialState = {
    groups: [groupsModel],
    selectedGroup: 0,
    pageSize: 5,
    currentPage: 1
}

const groupsReducer = (state = initialState, action) => {
    let { groups, selectedGroup, pageSize, currentPage } = { ...state };
    switch (action.type) {
        case actions.ADD_ITEM:
            const data = { ...action.payload };
            groups.push(data);
            break;

        case actions.UPDATE_ITEM:
            const updatedItem = { ...action.payload };
            const index = groups.findIndex(el => el._id === updatedItem._id);
            if (index !== -1)
                groups[index] = updatedItem;

            break;

        case actions.DELETE_ITEM:
            const id = action.payload;
            const itemIndex = groups.findIndex(el => el._id === id);
            if (itemIndex !== -1)
                groups = [].concat(groups.slice(0, itemIndex), groups.slice(itemIndex, groups.length));
            break;

        case actions.GET_ITEM_BY_ID:
            const _id = action.payload;
            const itemindex = groups.findIndex(el => el._id === _id);
            if (itemindex !== -1)
                selectedGroup = itemindex;
            break;
            
        case actions.CHANGE_PAGE:
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
        currentPage: currentPage,
    }
};

export default groupsReducer;