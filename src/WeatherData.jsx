export default function WeatherData(data) {
  return (
    <div className="weather">
      <h2>{data.data.day}</h2>
      <img src={data.data.img} alt="day" />
      <p>
        <span>conditions: </span>
        {data.data.conditions}
      </p>
      <p>
        <span>time: </span>
        {data.data.time}
      </p>
    </div>
  );
}
