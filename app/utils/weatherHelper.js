var weatherHelper = function () {
  return {
    monthNames: ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    parseTime: (timestamp) => (
      new Date(timestamp * 1000)
    ),
    ordinal: (num) => {
      switch (num % 10) {
        case 1: return String(num) + 'st';
        case 2: return String(num) + 'nd';
        case 3: return String(num) + 'rd';
        default: return String(num) + 'th';
      }
    },
    displayTime: function (date) {
      date = this.parseTime(date);
      return this.ordinal(date.getDate()) +' '+ this.monthNames[date.getMonth()] +', '+date.getFullYear();
    }
  };
}();

export default weatherHelper;
