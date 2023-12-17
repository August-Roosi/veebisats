import PasswordValidator from "@/PasswordValidator.js";

export default function bootstrap(app) {
    app.config.globalProperties.$PasswordValidator = PasswordValidator;
}