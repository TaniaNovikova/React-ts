import { ChangeEvent } from "react";


export interface InputProps {
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "tel" | "number";
  placeholder?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  min?: number;
  step?: number;
}