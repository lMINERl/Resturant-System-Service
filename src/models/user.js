export default Object.freeze({
    _id:null,
    username: null,
    password: null,
    email: null,
    favouriteFood: () => [], //contains ids of foods unbinded
    favouriteRestaurant: () => [], //contains ids of restaurant unbinded
    groups: () => [], //group ids
    ownedGroups: () => [], //id group
    reviews: () => [], // id of reviews
    loyalityPoints: 0,
    roles: () => [], // allowance rules id
    cart: () => []
});