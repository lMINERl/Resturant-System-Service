export default Object.freeze({
    _id:null,
    username: null,
    password: null,
    email: null,
    favouriteFood: () => [], //contains ids of foods unbinded
    favouriteResturant: () => [], //contains ids of resturant unbinded
    groups: () => [], //group ids
    ownedGroups: () => [], //id group
    reviews: () => [], // id of reviews
    loyalityPoints: 0,
    roles: () => [], // allowance rules id
    cart: () => []
});