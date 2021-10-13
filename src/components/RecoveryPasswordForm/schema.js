import * as Yup from 'yup'

export const recoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
})
