const request = require('request')

const geocode = (address, callback) => {
  const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid3Rmcm9mbGxtYW8iLCJhIjoiY2tmZXdoNmFjMDkycDMwbm45MnVsNWlwbSJ9.JGdFyq60_KUYqNVuGMgyqw'

  request({ url: geocode, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to geolocation service.', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }

  })
}

module.exports = geocode