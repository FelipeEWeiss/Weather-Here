function App() {
  const nextDays = [
    {
      day: 'Today',
      weather: {
        img: '🌤️',
        description: 'Cloudy'
      }
    },
    {
      day: '25',
      weather: {
        img: '🌤️',
        description: 'Cloudy'
      }
    },
    {
      day: '26',
      weather: {
        img: '🌤️',
        description: 'Cloudy'
      }
    },
    {
      day: '27',
      weather: {
        img: '🌤️',
        description: 'Cloudy'
      }
    },
    {
      day: '28',
      weather: {
        img: '🌤️',
        description: 'Cloudy'
      }
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-[#272E3F] w-9/12 h-5/6 rounded-2xl flex flex-col p-24">
        <div className="flex justify-around w-full pb-12">
          <div className="w-full">
            <h1 className="text-5xl pb-2">Limerick, IE</h1>
            <h2 className="text-2xl pb-8">May 24, 2023</h2>
            <span className="text-9xl">🌤️</span>
            <p className="text-4xl">Cloudy</p>
          </div>
          <div className="flex justify-end">
            <span className="text-9xl">31°C</span>
          </div>
        </div>

        <hr style={{ borderTop: '0.05rem solid white', width: '100%', marginBottom: '1rem' }}/>

        <div className="flex flex-row justify-between px-8">
          { nextDays.map(nextDay => (
            <div className="flex flex-col items-center">
              <h3 className="text-2xl">{nextDay.day}</h3>
              <span className="text-6xl">{nextDay.weather.img}</span>
              <p className="text-2xl">{nextDay.weather.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
