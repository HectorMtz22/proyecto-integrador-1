import { List } from "@/types";
import Input from "../Input";

type SelectProps = {
  name: string;
  label: string;
  data: List[];
};

const Select = ({ name, data, label }: SelectProps) => (
  <Input type="select" name={`${name}_id`} requiredMessage>
    <option value="">Selecciona {label}</option>
    {data.map((el) => (
      <option key={el.id} value={el.id}>
        {el.name}
      </option>
    ))}
  </Input>
);

export default Select;
