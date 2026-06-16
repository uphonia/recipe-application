import { ChangeEvent } from "react";

import { Wrapper, Label, Select, Option } from "./select.styles";

type Props = {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  value: any;
};

export const SelectField = ({ id, onChange, options, label, value }: Props) => (
  <Wrapper>
    <Label htmlFor={id}>{label}:</Label>
    <Select id={id} value={value} onChange={onChange}>
      {options.map((option) => (
        <Option value={option}>{option}</Option>
      ))}
    </Select>
  </Wrapper>
);
