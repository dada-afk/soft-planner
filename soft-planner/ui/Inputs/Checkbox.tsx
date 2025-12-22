import { Dispatch, FC, SetStateAction, useState } from "react";
import { FormField } from "./FormField";
import "./Checkbox.scss";
import { Icon } from "../Icons/Icon";
import { UIIcons } from "../Icons/Icons";
import { Text } from "@/ui/Inputs/Text";

type Props = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  hasText?: boolean;
  textValue?: string;
  setTextValue?: (value: string) => void;
};

export const Checkbox: FC<Props> = ({
  id,
  checked,
  onChange,
  label,
  helperText,
  error,
  disabled,
  hasText,
  textValue,
  setTextValue,
}) => {
    return (
        <FormField
            id={id}
            label={label}
            helperText={helperText}
            error={error}
        >
            <label className='ui-checkbox'>
                <input
                id={id}
                type={'checkbox'}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className={'input'}
                />

                <span className={'visual-checkbox'}>
                {checked && <Icon icon={UIIcons.check} />}
                </span>

                {hasText && <Text id={`checkbox-text__${id}`} value={textValue ?? ''} onChange={setTextValue ?? console.log} isCheckboxText />}
            </label>
        </FormField>
    );
};
