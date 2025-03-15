import dayjs from "dayjs";

const formatPostDate = (date: string) => {
  return dayjs(date).format("DD.MMM.YYYY");
};

export default formatPostDate;
