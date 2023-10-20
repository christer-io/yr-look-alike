import { NumberInput } from "@tremor/react";


function Windfrom({wind_from_direction, unit}) {
  let wind = Number(wind_from_direction);
  wind = wind + 1;
  return (
    <div className="">Wind from: {wind_from_direction} {unit}</div>
  )
}

export default Windfrom