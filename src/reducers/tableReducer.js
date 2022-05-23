import * as types from "../reduxActions/auth/types";
import UserService from "../services/userService";

const intialState = {
    name: "",
    price: "",
    image: "",
    describe: "",
    authorId: UserService.getCurrentUserId(),
};

const tableReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.CREATE_TABLE: {
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
