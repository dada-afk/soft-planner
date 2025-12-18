import { FC, ReactNode } from "react";
import './Card.scss';

type Props = {
    children: ReactNode;
}

export const Card: FC<Props> = ({ children}) => {
    return(
        <div className={'ui-card'}>{children}</div>
    )
};