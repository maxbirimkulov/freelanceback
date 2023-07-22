import {body} from "express-validator";
import {validationResult} from "express-validator";

export  default (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }
    next()
}

export const registerUserValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('image', 'Неверный путь').optional().isString(),
    body('status', 'Укажите статус').isString(),
    body('name', 'Укажите ваше имя').isString(),
    body('password', 'Пароль должен быть минимум 8 символов').isLength({min:8}),
    body('description', 'Заполните описание').optional().isString(),
    body('resume', 'Заполните резюме').optional().isString(),
    body('profession', 'Заполните ваши профессии').optional().isArray()
]

export const loginUserValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 8 символов').isLength({min:8})
]
export const resetPasswordValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('oldPassword', 'Пароль должен быть минимум 8 символов').isLength({min:8}),
    body('newPassword', 'Пароль должен быть минимум 8 символов').isLength({min:8})
]