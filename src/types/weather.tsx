type Coord = {
  lon: number
  lat: number
}

type Weathers = {
  id: number
  main: string
  description: string
  icon: string
}

type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type WeatherData = {
  coord?: Coord,
  weather?:Weathers[],
  base?:string,
  main?:Main,
  visibility?:number,
  wind?:{},
  clouds?:{},
  dt?:number,
  sys?:{},
  timezone?:number,
  id?:number,
  name?:string,
  cod?:number
}

// https://api.openweathermap.org/data/2.5/weather?q=SAGAMIHARA&appid=596de78e141b7045c2c13fa7fb3d0109&units=metric
// {"coord":{"lon":139.3544,"lat":35.5531},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":22.85,"feels_like":23.62,"temp_min":21.62,"temp_max":24.21,"pressure":1018,"humidity":93},"visibility":8047,"wind":{"speed":2.06,"deg":360},"rain":{"1h":0.15},"clouds":{"all":100},"dt":1662099575,"sys":{"type":1,"id":8060,"country":"JP","sunrise":1662063314,"sunset":1662109806},"timezone":32400,"id":1853295,"name":"Sagamihara","cod":200}