import * as actions from '../actions/foodActions';
import findIndex from '../../helpers/findIndex';


const initialState = {
    foods: [{
        _id: '5cf929e62a79451758f83c1b',
        name: 'Fish',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 54.00,
        img: null,
        rating: 2,
        size: 0,
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 0
    }],
    selectedFood: {
        _id: '5cf929e62a79451758f83c1b',
        name: 'Fish',
        discountPrice: 160.00,
        discountPercent: 50,
        price: 85.00,
        rating: 4,
        size: 0,
        sizes: [`small`, `meduim`, `large`, `x-large`],
        amount: 0,
        comments: [{ userId: "5cf92f1c2a79451758f83c2a", number: 0 }],
        ingredients: [`a`, `b`, `c`],
        tags: [`tag1`, `tag2`]
    },
    currentPage: 1,
    pageSize: 5
}

const foodReducer = (state = initialState, action) => {
    let nfoods = [...state.foods];
    let nselectedFood = { ...state.selectedFood };
    let ncurrentPage = state.currentPage;
    let npageSize = state.pageSize;
    switch (action.type) {
        case actions.ADD_ITEM: {
            const data = { ...action.payload };
            nfoods.push(data);
        }
            break;

        case actions.UPDATE_ITEM: {
            const updatedItem = { ...action.payload };
            const index = findIndex(nfoods, updatedItem._id);
            if (index !== -1)
                nfoods[index] = updatedItem;
        }

            break;

        case actions.DELETE_ITEM: {
            const id = action.payload;
            const itemIndex = findIndex(nfoods, id);
            if (itemIndex !== -1)
                nfoods = [].concat(nfoods.slice(0, itemIndex), nfoods.slice(itemIndex, nfoods.length));
        }
            break;

        case actions.GET_ITEM_BY_ID: {
            const _id = action.payload;
            const itemindex = findIndex(nfoods, _id);
            if (itemindex !== -1)
                nselectedFood = itemindex;
        }
            break;
        case actions.GET_RESTURANT_MENU:
            nfoods = [...action.payload];
            break;

        case actions.CHANGE_PAGE:
            ncurrentPage = action.payload;
            break;

        case actions.SET_SIZE: {

            const { id, size } = { ...action.payload };
            const index = findIndex(nfoods, id);
            if (index !== -1) {
                if (size < nfoods[index].sizes.length && size > -1) {
                    nfoods[index].size = size;
                }
            }

        }
            break;

        case actions.SET_AMOUNT: {

            const { id, amount } = { ...action.payload };
            if (amount < 10 && amount > -1) {
                const index = findIndex(nfoods, id);

                if (index !== -1) {
                    nfoods[index].amount = amount;
                }
            }
        }
            break;
        case actions.SET_RATING: {

            const { id, rating } = { ...action.payload };
            if (rating < 10 && rating > -1) {
                const index = findIndex(nfoods, id);

                if (index !== -1)
                    nfoods[index].rating = rating;
            }
        }
            break;

        case action.ERROR:
            break;
        default:
            break;
    }
    return {
        ...state,
        foods: nfoods,
        selectedFood: nselectedFood,
        pageSize: npageSize,
        currentPage: ncurrentPage
    }
};

export default foodReducer;