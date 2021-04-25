const API_KEY = "78cfc01f3e6c94ad2fc60a591fd9b148";
const city_id = "472045";
const tempUnit = "˚";
const humidityUnit = " %";
const pressureUnit = " мм. рт. ст.";
const windUnit = " м/с";

var currentData;

fetch(
  `http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${API_KEY}`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);

    // конвертация давления в мм. рт. ст.
    function convertPressure(value) {
      return (value / 1 / 33).toFixed();
    }

    // ф-я склеивает два значения в одну строку
    function getValueWithUnit(value, unit) {
      return `${value}${unit}`;
    }

    // получение строки с температурой
    function getTemperature(value) {
      var roundedValue = value.toFixed() - 273;
      return getValueWithUnit(roundedValue, tempUnit);
    }

    // отрисовка
    function render(data) {
      renderCity(data);
      renderCurrentTemperature(data);
      renderCurrentDescription(data);

      renderDetails(data);
      renderIcon(data);
    }

    // название города
    function renderCity(data) {
      let cityName = document.querySelector(".current__city");
      cityName.innerHTML = data.name;
    }

    // получаем температуру
    function renderCurrentTemperature(data) {
      let tmp = data.main.temp;
      let currentTmp = document.querySelector(".current__temperature");
      currentTmp.innerHTML = getTemperature(tmp);
    }

    function renderCurrentDescription(data) {
      let tmp = data.weather[0].description;

      let description = document.querySelector(".current__description");
      description.innerHTML = tmp;
    }

    function renderIcon(data) {
      let icon = data.weather[0].icon;
      iconWeather.innerHTML = `<div class="current__icon icon__${icon}"></div>`;
    }

    //  отображение детальной информации
    function renderDetails(data) {
      let item = data.main[0];
      let pressureValue = convertPressure(data.main.pressure);
      let pressure = getValueWithUnit(pressureValue, pressureUnit);
      let humidity = getValueWithUnit(data.main.humidity, humidityUnit);
      let feels_like = getTemperature(data.main.feels_like);
      let wind = getValueWithUnit(data.wind.speed, windUnit);

      renderDetailsItem("feelslike", feels_like);
      renderDetailsItem("humidity", humidity);
      renderDetailsItem("pressure", pressure);
      renderDetailsItem("wind", wind);
    }

    function renderDetailsItem(className, value) {
      let container = document
        .querySelector(`.${className}`)
        .querySelector(".details__value");
      container.innerHTML = value;
    }

    render(data);
  });
