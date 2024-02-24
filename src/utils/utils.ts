export const formatDate = (date: string) => {
  const newDate =
    new Date(date).getDate().toString() +
    "/" +
    (new Date(date).getMonth() + 1).toString() +
    "/" +
    new Date(date).getFullYear().toString();
  return newDate;
};

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const formatDateString = (date: string) => {
  const newDate = new Date(date).getDate().toString() + " " + monthNames[new Date(date).getMonth()];

  return newDate;
};
