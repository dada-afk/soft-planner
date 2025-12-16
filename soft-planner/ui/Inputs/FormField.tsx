import { FC, ReactNode } from "react";
import { Typography } from "../Typography/Typography";
import "./FormField.scss";
import { FontSize, FontWeight } from "../ui-system/ui-system";
import { UIIcons } from "../Icons/Icons";
import { Icon } from "../Icons/Icon";

    type Props = {
    id: string;
    label?: string;
    helperText?: string;
    error?: string;
    children: ReactNode;
    };

    export const FormField: FC<Props> = ({
    id,
    label,
    helperText,
    error,
    children,
}) => {
    return (
        <div className='ui-form-field' data-error={!!error}>
            {label && <label htmlFor={id} className='label'><Typography text={label} fontWeight={FontWeight[600]} /></label>}

            <div className='control'>
                {children}
            </div>

            {helperText && !error && 
                <div className='helper'>
                    <Icon className={'helper-icon'} icon={UIIcons.info} size={FontSize.xs} />
                    <Typography text={helperText} fontSize={FontSize.xs} isItalic />
                </div>
            }

            {error && 
                <div className='error' role='alert'>
                    <Icon className={'error-icon'} icon={UIIcons.error} size={FontSize.xs} />
                    <Typography text={error} fontSize={FontSize.xs} isItalic />
                </div>
            }
        </div>
    );
}