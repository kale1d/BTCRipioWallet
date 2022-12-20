export const parsedDate = ({ date }: { date?: Date }) => {
  const minutes =
    date!.getMinutes() <= 9 ? `0${date?.getMinutes()}` : date?.getMinutes();
  return `${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()} - ${date?.getHours()}:${minutes} hs`;
};
