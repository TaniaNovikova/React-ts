import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  id?: string;
  type: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  error?: string;
}
