import "./style.css";
import { WeatherData } from "../../../types/weather";
import dayjs from "dayjs";

interface Props {
  data: WeatherData
}

const Weather: React.FC<Props> = ( {data} ) => {
  return (
    <div>
      <div>
        <div id="box">
          <div className="left">
            <div id="Contents">
              <div className="title">町名</div>
              <p>{data.name}</p>
            </div>
            <div id="Contents">
              <div className="title">現在の天気</div>
              <p>{ data.weather![0].main}</p>
            </div>
          </div>
          <div className="right">
            <img className="image"
              src={`${'https://openweathermap.org/img/w'}/${data.weather![0].icon}.png`}
              alt={data.weather![0].description} />
          </div>
          <div className="three">
            <div>
              <div className="title box3">日付</div>
              <span className="size">{ dayjs().format('YYYY-MM-DD')}</span>
            </div>
            <div>
              <div className="title box3">気温</div>
              <span className="size"> {data.main!.temp}°C</span>
            </div>
            <div>
              <div className="title box3">湿度</div>
              <span className="size">{data.main!.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
