const APIKey = 'g4CMSirPQGHFQ3UjW9fWUORQmcurD6ih'
const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityData] = await response.json()
    console.log(cityData)

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityData('São Paulo')