import { FC } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import { UIButtonVariant } from "../ui-system/ui-system";
import { UIIcons } from "../Icons/Icons";
import { Card } from "../Card/Card";
import './Modal.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    footer?: React.ReactNode;
    children: React.ReactNode;
};

export const Modal: FC<Props> = ({ isOpen, onClose, footer, children }) => {
    if(!isOpen) return null;

    return createPortal(
    <Card>
        <div className={'ui-modal'}>
            <div className={'backdrop'} onClick={onClose} />

            <div
                className={'dialog'}
                role={'dialog'}
                aria-modal={'true'}
            >
                <div className={'content'}>
                    <Button
                        variant={UIButtonVariant.Tertiary}
                        icon={UIIcons.close}
                        onClick={onClose}
                    />
                    {children}
                </div>

                {footer && <footer>
                    {footer}
                </footer>}
            </div>
        </div>
    </Card>,
    document.body
  );
}