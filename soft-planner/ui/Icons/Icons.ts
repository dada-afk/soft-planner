import AddIcon from '@mui/icons-material/Add';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export const UIIcons = {
    add: AddIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

export type UIIconsType = typeof UIIcons[keyof typeof UIIcons];