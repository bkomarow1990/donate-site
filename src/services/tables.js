import { AlertService } from "./alertService.js";
import { authErrors } from "../constants/messages/authMessages";
import tableService from "../api/tables";

export function createTable(history, values) {
    var model = {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: values.name,
        goal: values.goal,
        image: values.image,
        describe: values.describe,
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
