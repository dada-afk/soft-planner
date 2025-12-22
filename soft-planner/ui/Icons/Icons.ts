import AddIcon from '@mui/icons-material/Add';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
// Emoji icons
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export const UIIcons = {
    add: AddIcon,
    error: ErrorIcon,
    info: InfoIcon,
    check: CheckIcon,
    close: CloseIcon,
    update: UpdateIcon,
    emojiWorst: MoodBadIcon,
    emojiBad: SentimentVeryDissatisfiedIcon,
    emojiNeutral: SentimentSatisfiedIcon,
    emojiGood: SentimentSatisfiedAltIcon,
    emojiBest: SentimentVerySatisfiedIcon,
    addEmotion: AddReactionIcon,
};

export type UIIconsType = typeof UIIcons[keyof typeof UIIcons];