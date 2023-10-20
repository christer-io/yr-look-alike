
import Windfrom from "@/components/Windfrom"
import WindSpeed from "@/components/WindSpeed"
import Time from "@/components/Time"
import AirTemperature from "@/components/AirTemperature"
import Humidity from "@/components/Humidity"
import RainNextHours from "@/components/RainNextHours"
import { Card, Metric, Text } from "@tremor/react"


const fetchYr = async ({lat, lng}) => {
    const res = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`, {cache: 'no-store', // Disable caching
});
    const list = await res.json();
    return list;
  
  } 

async function ListWeather({status, lat, lng}) {
    const yr = await fetchYr({lat, lng}); 

    return (
    <div>
        <div className="p-2 items-center">
            <Text className="pb-2">
               Lat:  {yr.geometry?.coordinates[0]} Lon: {yr.geometry?.coordinates[1]}
            </Text>
        </div> 
      {yr.properties.timeseries.map((res) => (
        <div className="flex text-left pr-6 pb-2 mx-auto flex-col space-x-3 md:max-w-xl ">  
            <Text className="pl-3 pb-1" color="indigo">
                <Time time={res.time}/>
            </Text>
            <Card className="p-1" decoration="top" decorationColor="indigo">
                <div className="flex flex-row">
                    <div>
                        
                        <Metric className="text-base" color="blue">
                            <div className="pt-1 pl-2">
                                <AirTemperature unit={yr.properties?.meta.units.air_temperature} air_temperature={res.data.instant.details.air_temperature}/>
                            </div>
                        </Metric> 
                        <Text className="pl-2">  
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
                        </Text>

                    </div>
                    
                    <div className="pl-8">
                        <RainNextHours unit={yr.properties?.meta.units.precipitation_amount} symbol={res.data.next_6_hours?.summary?.symbol_code} duration="6 hours" precipitation_amount={res.data.next_6_hours?.details?.precipitation_amount}/>
                    </div>
                </div>
            </Card>
        </div> 
       
      ))}
    </div>

  )
}

export default ListWeather