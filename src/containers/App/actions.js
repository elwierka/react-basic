import * as actions from '../../common/constants/actions';

export const getAppData = (url) => ({
    type: actions.GET_APP_DATA,
    payload: {
        url,
    },
});