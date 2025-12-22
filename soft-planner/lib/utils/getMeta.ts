import { LEVELS } from "@/ui/ui-system/ui-system";

export const getMeta = (value: number) => {
    return LEVELS.find(level => value <= level.max)!;
}