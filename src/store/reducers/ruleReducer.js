import * as actions from '../actions/ruleActions';
import ruleModel from '../../models/rule';

const initialState = {
    rules: [ruleModel],
    userRules: ["ids"]
}

const ruleReducer = (state = initialState, action) => {
    let { rule, userRules } = { ...state };
    switch (action.type) {
        case actions.ADD_ITEM:
            const data = { ...action.payload };
            rule.push(data);
            break;

        case actions.UPDATE_ITEM:
            const updatedItem = { ...action.payload };
            const index = rule.findIndex(el => el._id === updatedItem._id);
            if (index !== -1)
                rule[index] = updatedItem;

            break;

        case actions.DELETE_ITEM:
            const id = action.payload;
            const itemIndex = rule.findIndex(el => el._id === id);
            if (itemIndex !== -1)
                rule = [].concat(rule.slice(0, itemIndex), rule.slice(itemIndex, rule.length));
            break;
            
        case actions.GET_ITEM_BY_ID:
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