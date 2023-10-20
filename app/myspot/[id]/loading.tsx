"use client"
import HeaderYr from "@/components/HeaderYr"
import { ThreeDots } from "react-loader-spinner"

function loading() {
  return (
    
    <div className="max-w-3xl mx-auto pb-5 text-center items-center">
        <HeaderYr />
        
        <div className="w-full pb-5 content-center ">  
            <h2 className="pb-1 pt-3 items-center">Loading....</h2>
            <div className="flex items-center justify-center p-2">
                <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}
                />     
            </div>
                
        </div>

    </div>
  )
}

export default loading