import { useFormik } from "formik";
import * as Yup from 'yup';


import Input from "components/Input/Input";
import { EmployeeFormContainer, EmployeeFormTitle, InputsContainer} from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";
import Button from "components/Button/Button";


function EmployeeForm () {
    //создаём валидационную схему через Yup
    const shema = Yup.object().shape({
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
        [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
        [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
        .required('Field "Возраст" is required')
        .typeError('"Возраст" must be number')
        .test('Check min "Возраст"', 'Min 18', value => value >= 18)
        .test('Check min "Возраст"', 'Min 18', value => value <= 80),
      //проверки max и min работают с числовыми значениями и 
      //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
      // .max(150, 'Max 150')
      // .min(18, 'Min 18'),
    
        [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
      })
         
  
    //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
    const formik = useFormik({
      initialValues: {
        [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
        [EMPLOYEE_FORM_NAMES.LAST_NAME]: '',
        [EMPLOYEE_FORM_NAMES.AGE]: 0,
        [EMPLOYEE_FORM_NAMES.POSITION]: '',
        [EMPLOYEE_FORM_NAMES.TERMS_OF_USE]: false
      } as EmployeeFormValue,
      //привязка валидационной схемы Yup к формику формы LoginForm
      validationSchema: shema,
      validateOnChange: false,
      // validateOnMount: true,
      onSubmit: (values: EmployeeFormValue) => {
        console.log(values);
      }
    });
  
    console.log(formik);
  
    return (
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>
        <EmployeeFormTitle>Employee form</EmployeeFormTitle>
        <InputsContainer>
          <Input
            name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
            id="first_name"
            placeholder="Введите Ваше имя"
            label="Имя"
            value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          />
          <Input
            name={EMPLOYEE_FORM_NAMES.LAST_NAME}
            id="last_name"
            placeholder="Введите Вашу фамилию"
            label="Фамилия"
            value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          />
          <Input
            name={EMPLOYEE_FORM_NAMES.AGE}
            id="age"
            placeholder="Введите Ваш возраст"
            type="number"
            label="Возраст"
            value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
          />
          <Input
            name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
            id="first_name"
            placeholder="Введите Ваше имя"
            label="Имя"
            value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          />
           <Input
            name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
            id="first_name"
            placeholder="Введите Ваше имя"
            label="Имя"
            value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          />
        </InputsContainer>
        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>
    );
}

  export default EmployeeForm;