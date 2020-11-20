import { cs } from "date-fns/esm/locale";
import format from "date-fns/esm/format";

export const formatDate = (date: Date, formatType = "d.LLLL yyyy") => {
  if (!date) {
    return "";
  }
  return format(date, formatType, { locale: cs });
};

export const formatDateWithDay = (date: Date, formatType = "d.LLLL yyyy (EEEEE)") => {
  if (!date) {
    return "";
  }
  return format(date, formatType, { locale: cs });
};

export const formatDateTime = (date: Date, formatType = "d.LLLL yyyy H:mm") => {
  if (!date) {
    return "";
  }
  return format(date, formatType, { locale: cs });
};

export const formatHours = (date: Date) => {
  if (!date) {
    return "";
  }
  return format(date, "H:mm", { locale: cs });
};

export const formatMonth = (date: Date) => {
  if (!date) {
    return "";
  }

  return format(date, "LLLL yyyy", { locale: cs });
};

export const formatYear = (date: Date) => {
  if (!date) {
    return "";
  }

  return format(date, "yyyy", { locale: cs });
};

export const formatMoney = (money: any) => {
  if (!money) {
    return "";
  }
  const formatter = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
  });
  return formatter.format(money);
};
