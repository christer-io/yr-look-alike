import Plaincard from "@/components/Plaincard"
import Windfrom from "@/components/Windfrom"
import WindSpeed from "@/components/WindSpeed"
import Time from "@/components/Time"
import AirTemperature from "@/components/AirTemperature"
import Humidity from "@/components/Humidity"
import RainNextHours from "@/components/RainNextHours"
import { Card } from "@tremor/react"


// fetching data 
const fetchYr = async () => {
    const res = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.91&lon=10.75");
    const list = await res.json();
    return list;
  
  } 

const vindFra = () => {
    const vind = 10;
    return vind;
}  

async function testing() {
    const yr = await fetchYr();  
    

    return (
        
    <div className="text-center ">
        <div className="p-2 items-center">
            <h1 className="text-xl">Lat:  {yr.geometry?.coordinates[0]} Lon: {yr.geometry?.coordinates[1]}</h1>
        </div> 
      {yr.properties.timeseries.map((res) => (
        <div className="flex text-left pr-6 mx-auto flex-col space-x-3 md:max-w-xl ">
                
                <div className="pl-3 pt-3 bp-1 pr-3"> 
                    <Time time={res.time}/>
                </div>
                <Card className="p-1 bg-white">
                    <div className="flex flex-row">
                        <div>
                            <div className="pt-1 pl-1">
                                <AirTemperature unit={yr.properties?.meta.units.air_temperature} air_temperature={res.data.instant.details.air_temperature}/>
                            </div>   
                            <div className="pt-1 pl-1">
                                <Windfrom unit={yr.properties?.meta.units.wind_from_direction} wind_from_direction={res.data.instant.details.wind_from_direction}/>
                            </div>
                            <div className="pt-1 pl-1">
                                <WindSpeed unit={yr.properties?.meta.units.wind_speed} wind_speed={res.data.instant.details.wind_speed}/>
                            </div>   
                            <div className="pt-1 pl-1">
                                <Humidity unit={yr.properties?.meta.units.relative_humidity} relative_humidity={res.data.instant.details.relative_humidity}/>
                            </div> 
                            <div className="pt-1 pl-1">
                            {res.data.next_6_hours?.details?.precipitation_amount} {yr.properties?.meta.units.precipitation_amount} next 6 Hours.
                            </div>

                        </div>
                        
                        <div className="pl-8 pb-2">
                            <RainNextHours unit={yr.properties?.meta.units.precipitation_amount} symbol={res.data.next_6_hours?.summary?.symbol_code} duration="6 hours" precipitation_amount={res.data.next_6_hours?.details?.precipitation_amount}/>
                        </div>
                    </div>
                </Card>
        </div> 
       
      ))}
    </div>
    
  )
}

export default testing