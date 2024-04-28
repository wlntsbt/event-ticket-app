export const timeToDate = (date: string, time: string) => {
  const [year, month, day] = date.split('-').map((x) => parseInt(x));
  const [hour, minute] = time.split(':').map((x) => parseInt(x));
  return new Date(year, month - 1, day, hour, minute);
};
