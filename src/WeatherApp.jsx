import SearchBox from './SerachBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    let[weatherInfo, setWeatherInfo]=useState(
        {
              city:"WonderLand",
              feelsLike: 22.79,
              humidity: 53,
              temp: 23.05,
              tempMax: 23.05,
              tempMin:23.05,
              weather:"haze",
        }
    );
    
        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }
    return(
        <>
        <div style={{textAlign:"center"}}><h3>The Weather Channel</h3></div>
        <SearchBox updateInfo={updateInfo}/>
     <InfoBox Info ={weatherInfo}/>

     </>
    )
}