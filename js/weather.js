const APIKey = 'g4CMSirPQGHFQ3UjW9fWUORQmcurD6ih'
const language = 'pt-br' || 'en-us'

const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityData] = await response.json()
    return cityData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWaetherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=${language}`
    const response = await fetch(cityWaetherUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityWeatherData] = await response.json()
    // debugger
    return cityWeatherData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityWeather('São Paulo')