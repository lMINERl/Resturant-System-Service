const accessToken = Object.freeze({
    authorization: () => {
        try {
            return localStorage.getItem('authorization');
        } catch (err) {
            return null;
        }
    }
});


export default accessToken;