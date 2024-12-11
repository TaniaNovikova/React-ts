import { useFormik } from "formik";
import * as Yup from 'yup';


import Input from "components/Input/Input";
import { EmployeeFormContainer, EmployeeFormTitle, InputsContainer} from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";
import Button from "components/Button/Button";


function EmployeeForm() {
    //создаём валидационную схему через Yup
    const shema = Yup.object().shape({
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
        [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
        [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
        .required('Field "Фамилия" is required')
        .typeError('"Фамилия" must be number')
        .test('Check min "Фамилия" length', 'Min 10 symbols', value => String(value).length >= 10)
        .test('Check max "Фамилия" length', 'Поле должно содержать не больше 25 букв', value => String(value).length <= 20),
      //проверки max и min работают с числовыми значениями и 
      //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
      // .max(150, 'Max 150')
      // .min(18, 'Min 18'),
    
        [EMPLOYEE_FORM_NAMES.APPOINTMENT]: Yup.string()
        .required('Field "Имя" is required')
        .test('Check value length', 'Поле должно содержать не больше 25 букв', (value) => value.length <= 25),
      })
         
  
    //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
    const formik = useFormik({
      initialValues: {
        [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
        [EMPLOYEE_FORM_NAMES.LAST_NAME]: ''
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
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>git
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
        </InputsContainer>
        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>
    );
  }

  export default EmployeeForm;