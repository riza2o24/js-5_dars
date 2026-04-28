 
function Hero({text}) {
  return (
    <div>
      <div className="flex items-center justify-between container">
        <div>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero