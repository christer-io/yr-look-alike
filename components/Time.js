
function Time({time}) {
  //extract a cleen hour text
  const myArray = time.split("T");
  const cropHour = myArray[1].split("Z");
  const splitHour = cropHour[0].split(":");
  const hour = splitHour[0].concat(":", splitHour[1]); 

  //extract a date text
  const dateArray = time.split("T");
  const datePices = dateArray[0].split("-")

  return (
    <div className="">{datePices[2]}.{datePices[1]}.{datePices[0]} {hour}</div>
  )
}

export default Time