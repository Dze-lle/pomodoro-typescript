export const handleConvertTime = (value: number): string => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;

  return `${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }`;
};
