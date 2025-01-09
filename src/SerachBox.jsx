import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import "./SerachBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, SetCity]=useState("");
    let [error, setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="62536bd4d9c7cd2c987fda3d45c1a4ee";

    let getWeatherInfo=async()=>{
        try{
      let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse= await response.json();
     console.log(jsonResponse); 
    //  console.log(response);
    let result={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
}catch(err){
    throw err;
}

    }

   

    let handleChange=(event)=>{
         SetCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        SetCity("");
     let newInfo=await   getWeatherInfo();
     updateInfo(newInfo);
        }catch(err){
             setError(true);
        }

    }


    return (
        <div className='box'>
          
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <IconButton aria-label="fingerprint" type="submit" color="success"  >
        <Fingerprint />
      </IconButton>
        {error && <p style={{color:"red"}}>No Such Place exixt! </p>}
      </form>

        </div>
    )
}