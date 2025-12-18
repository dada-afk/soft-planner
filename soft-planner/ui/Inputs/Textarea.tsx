import { FC } from "react";
import { FormField } from "./FormField";
import "./Textarea.scss";
import { UITextareaRows } from "../ui-system/ui-system";

type Props = {
    id: string;
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    error?: string;
    rows?: UITextareaRows;
}

export const Textarea: FC<Props> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  helperText,
  error,
  rows = 4,
}) => {
  return (
    <FormField
      id={id}
      label={label}
      helperText={helperText}
      error={error}
    >
      <textarea
        id={id}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={'ui-textarea'}
        placeholder={placeholder}
      />
    </FormField>
  );
}
