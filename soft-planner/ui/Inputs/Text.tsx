import { FC, ReactNode } from "react";
import { FormField } from "./FormField";
import "./Text.scss";

type Props = {
    id: string;
    label?: string;
    helperText?: string;
    error?: string;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    children?: ReactNode;
};

export const Text: FC<Props> = ({
    id,
    label,
    helperText,
    error,
    value,
    onChange,
    disabled,
    placeholder,
    children,
}) => {
    return (
        <FormField id={id} label={label} helperText={helperText} error={error}>
            <input
                id={id}
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                className={'ui-input'}
            />
            {children}
        </FormField>
    );
}
