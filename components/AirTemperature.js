import { WiCelsius } from "react-icons/wi";

  function AirTemperature({air_temperature, unit}) {
    return (
      <div className="flex flex-row">
        <div className="pt-1">{air_temperature} </div>
        <div className=""><WiCelsius size={50}/></div>
      </div>
      
    )
  }
  
  export default AirTemperature