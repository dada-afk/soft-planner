import AddIcon from '@mui/icons-material/Add';

export const UIIcons = {
    Add: AddIcon,
};

export type UIIconsType = typeof UIIcons[keyof typeof UIIcons];