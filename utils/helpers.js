module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
<<<<<<< Updated upstream
  format_date: (date) => {
    return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${
      new Date(date).getFullYear()
    }`;
  },
};
=======

    format_date: (date) => {
      return ` ${new Date(date).getDate()} /${new Date(date).getMonth()} / ${new Date(date).getFullYear()}`;
    }};
>>>>>>> Stashed changes
