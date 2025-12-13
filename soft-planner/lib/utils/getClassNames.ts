export const getClassNames = (...classes: (string | false | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};
