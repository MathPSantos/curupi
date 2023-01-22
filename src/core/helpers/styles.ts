export const getClassesToApply = (
  ...classes: (boolean | null | undefined | string)[]
) => classes.filter(Boolean).join(" ");
