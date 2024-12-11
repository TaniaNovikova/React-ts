import { boolean } from "yup";

export interface EmployeeFormValue {
  имя: string;
  фамилия: string;
  возраст: number;
  должность: string;
  правила_использования: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = "имя",
  LAST_NAME = "фамилия",
  AGE = "возраст",
  APPOINTMENT = "должность",
  TERMS_OF_USE = "правила_использования",
}
