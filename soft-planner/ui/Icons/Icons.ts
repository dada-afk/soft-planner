import AddIcon from '@mui/icons-material/Add';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
// Emoji icons
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export const UIIcons = {
    add: AddIcon,
    error: ErrorIcon,
    info: InfoIcon,
    check: CheckIcon,
    emojiWorst: MoodBadIcon,
    emojiBad: SentimentVeryDissatisfiedIcon,
    emojiNeutral: SentimentSatisfiedIcon,
    emojiGood: SentimentSatisfiedAltIcon,
    emojiBest: SentimentVerySatisfiedIcon,
};

export type UIIconsType = typeof UIIcons[keyof typeof UIIcons];