import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormContainer,
  EmployeeFormTitle,
  InputsContainer,
} from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";
import Button from "components/Button/Button";
// import Checkbox from "components/Checkbox/Checkbox";

function EmployeeForm() {
  //создаём валидационную схему через Yup
  const shema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('Поле "Имя" является обязательным')
      .test(
        "Check value length",
        "Поле должно содержать не больше 50 букв",
        (value) => value.length <= 25
      )
      .test(
        "Check value lenght",
        "Поле должно содержать не меньше 2 букв",
        (value) => value.length >= 2
      ),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('Поле "Фамилия" является обязательным')
      .test(
        "Check value length",
        "Поле должно содержать не больше 15 букв",
        (value) => value.length <= 15
      ),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .min(18, "Min age 18")
      .max(80, "Max age 80"),
    //проверки max и min работают с числовыми значениями и
    //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
    // .max(150, 'Max 150')
    // .min(18, 'Min 18'),

    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
      .required('Поле "Должность" является обязательным')
      .test(
        "Check value length",
        "Поле должно содержать не больше 30 букв",
        (value) => value.length <= 30
      ),
  });

  //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.POSITION]: "",
      [EMPLOYEE_FORM_NAMES.TERMS_OF_USE]: false,
    } as EmployeeFormValue,
    //привязка валидационной схемы Yup к формику формы LoginForm
    validationSchema: shema,
    validateOnChange: false,
    // validateOnMount: true,
    onSubmit: (values: EmployeeFormValue) => {
      console.table(values);
    },
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
          label="Имя*"
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          id="last_name"
          placeholder="Введите Вашу фамилию"
          label="Фамилия*"
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
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id="position"
          placeholder="Введите Вашу должность"
          label="Должность*"
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
        {/* <Checkbox id="agree_id" name={EMPLOYEE_FORM_NAMES.TERMS_OF_USE} onChange={formik.handleChange} checked={false} label="Правила использования" type="checkbox"/> */}
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="agree_id"
            name={EMPLOYEE_FORM_NAMES.TERMS_OF_USE}
            onChange={formik.handleChange}
            checked={formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
          />
          <CheckboxLabel htmlFor="agree_id">
            С правилами использования ознакомлен
          </CheckboxLabel>
        </CheckboxContainer>
      </InputsContainer>
      <Button
        name="Создать"
        type="submit"
        disabled={!formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
      />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
