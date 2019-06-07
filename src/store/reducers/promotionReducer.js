import * as actions from '../actions/promotionsActions';
import promotionsModel from '../../models/promotions';

const initialState = {
    promotions: [promotionsModel],
    selectedPromotion: 0
}

const promotionsReducer = (state = initialState, action) => {
    let { promotions, selectedPromotion } = { ...state };
    switch (action.type) {
        case actions.ADD_ITEM:
            const data = { ...action.payload };
            promotions.push(data);
            break;

        case actions.UPDATE_ITEM:
            const updatedItem = { ...action.payload };
            const index = promotions.findIndex(el => el._id === updatedItem._id);
            if (index !== -1)
                promotions[index] = updatedItem;

            break;

        case actions.DELETE_ITEM:
            const id = action.payload;
            const itemIndex = promotions.findIndex(el => el._id === id);
            if (itemIndex !== -1)
                promotions = [].concat(promotions.slice(0, itemIndex), promotions.slice(itemIndex, promotions.length));
            break;
            
        case actions.GET_ITEM_BY_ID:
            const _id = action.payload;
            const itemindex = promotions.findIndex(el => el._id === _id);
            if (itemindex !== -1)
                selectedPromotion = itemindex;
            break;

        case action.ERROR:
            break;
        default:
            break;
    }
    return {
        ...state,
        promotions: promotions,
        selectedPromotion: selectedPromotion
    }
};

export default promotionsReducer;