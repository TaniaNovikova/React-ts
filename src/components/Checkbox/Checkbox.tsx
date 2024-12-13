import { CheckboxContainer, CheckboxLabel } from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({
  id,
  name,
  onChange,
  checked = false,
  label,
  type = "checkbox",
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <Checkbox
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
        label={label}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
}

export default Checkbox;
