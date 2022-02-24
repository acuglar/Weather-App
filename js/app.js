const cityForm = document.querySelector('[data-js="change-location"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  // debugger
  console.log(inputValue);
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await getCityWeather(Key)

  console.log(WeatherText, Temperature.Metric.Value)
  cityForm.reset()
})