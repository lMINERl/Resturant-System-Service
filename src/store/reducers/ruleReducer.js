import * as actionTypes from '../actions/ruleActions';
import ruleModel from '../../models/rule';

const initialState = {
    roles: [ruleModel],
    userRules: ["ids"]
}

const ruleReducer = (state = initialState, action) => {
    let { rule, userRules } = { ...state };
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const data = { ...action.payload };
            rule.push(data);
            break;

        case actionTypes.UPDATE_ITEM:
            const updatedItem = { ...action.payload };
            const index = rule.findIndex(el => el._id === updatedItem._id);
            if (index !== -1)
                rule[index] = updatedItem;

            break;

        case actionTypes.DELETE_ITEM:
            const id = action.payload;
            const itemIndex = rule.findIndex(el => el._id === id);
            if (itemIndex !== -1)
                rule = [].concat(rule.slice(0, itemIndex), rule.slice(itemIndex, rule.length));
            break;
            
        case actionTypes.GET_ITEM_BY_ID:
            const _id = action.payload;
            const itemindex = rule.findIndex(el => el._id === _id);
            if (itemindex !== -1)
                userRules = itemindex;
            break;

        case action.ERROR:
            break;
        default:
            break;
    }
    return {
        ...state,
        rule: rule,
        userRules: userRules
    }
};

export default ruleReducer;