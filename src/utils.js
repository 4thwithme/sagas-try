export const convertForReactSelectFormat = (arr) =>
  arr.map((val) => ({ label: val, value: val.toLowerCase() }));
