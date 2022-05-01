import { AlertService } from "./alertService.js";
import { authErrors } from "../constants/messages/authMessages";
import tableService from "../api/tables";
import { UserService } from "../services/userService.js";

export function createTable(history, values) {
    var model = {
        name: values.name,
        price: values.price,
        image: values.image,
        describe: values.describe,
        authorId: UserService.getCurrentUserId(),
    };

    tableService
        .createTable(model)
        .then(
            () => {
                AlertService.successMessage(authErrors.REGISTRATION_SUCCESS);
                history.push("/main");
            },
            (err) => {
                err.response.status === 400
                    ? AlertService.errorMessage(err)
                    : AlertService.errorMessage(err);
            }
        )
        .catch(() => {
            AlertService.errorMessage(
                authErrors.REGISTRATION_FAILED,
                authErrors.SOMETHING_WENT_WRONG
            );
        });
}
