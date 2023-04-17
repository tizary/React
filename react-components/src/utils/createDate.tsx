export const createDate = () => {
  const date = new Date();
  if (date.getMonth() < 9 && date.getDate() < 10) {
    return `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
  } else if (date.getMonth() < 9) {
    return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  } else if (date.getDate() < 10) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
  }
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
