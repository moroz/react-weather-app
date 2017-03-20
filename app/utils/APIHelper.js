import axios from 'axios';

var APIHelper = function () {
  return {
    apiKey: "001e31fde7431e127c3a20917472a6bb",
    baseUrl: "http://api.openweathermap.org/data/2.5/forecast/daily?",
    getQueryData: function (city) {
      return {
        q: city,
        type: 'accurate',
        APPID: this.apiKey,
        units: 'metric',
        cnt: 5
      }
    },
    toQueryString: function(query) {
      return Object.keys(query).map(key => {
        return key + '=' + encodeURIComponent(query[key]);
      }).join('&');
    },
    getUrl: function (city) {
      var query = this.getQueryData(city);
      return this.baseUrl + this.toQueryString(query);
    },
    getWeather: function (city) {
      return axios.get(this.getUrl(city));
    }
  }
}();

export default APIHelper;
