import Image from "next/image";

//Rain next {duration}: {precipitation_amount} {unit}
function RainNextHours({symbol, precipitation_amount, duration, unit}) {
  return (
    <div className=" text-white items-center "> 
      <Image className="pb-2 pt-1" height={180} width={180} src={`/weather/svg/${symbol}.svg`} alt={precipitation_amount}/> 
    </div>
  )
}
export default RainNextHours