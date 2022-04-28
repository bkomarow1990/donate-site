import { userRoles } from "../constants/userRoles";
import * as types from "../reduxActions/auth/types";

const intialState = {
    role: userRoles.GUEST,
    isAuthUser: false,
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SET_USER_ROLE: {
            return {
                ...state,
                role: userRoles.USER,
                isAuthUser: true,
            };
        }

        case types.LOGOUT: {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            return {
                ...state,
                role: userRoles.GUEST,
                isAuthUser: false,
            };
        }

        default: {
            return state;
        }
    }
};

export default authReducer;