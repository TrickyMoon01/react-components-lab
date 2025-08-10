export default function WeatherData(data) {
  console.log(data)
  return (
    <>
      <div>
        <p>
          {data.data.day}
        </p>
        <p>          
          {data.data.conditions}
          </p>
          <p>
          {data.data.time}
          </p>
        <img src={data.data.img}/>
      </div>
    </>
  );
}
