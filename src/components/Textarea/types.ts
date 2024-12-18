import { ChangeEvent } from "react";

export interface TextareaProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
