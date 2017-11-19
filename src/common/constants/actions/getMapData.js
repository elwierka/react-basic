import actions from '../actions';

export const getMapData = (url) => {
    return (dispatch) => {
        fetch(String(url)).then(response => response.json())
        .then((response) => {
            console.log('repsonse', response)
        })
        .catch((error) => {
            console.log('error');
        });
    }
};

export default getMapData;