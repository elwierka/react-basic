const initialState = {
    url: '',
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_APP_DATA': {
            
            return {
                ...state,
                url: action.payload.url
            }
        }

        default: 
            return state;
    }
};

export default globalReducer;