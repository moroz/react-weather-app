var weatherHelper = function () {
  return {
    parseTime: (timestamp) => (
      new Date(timestamp * 1000)
    )
  };
}();

export default weatherHelper;
