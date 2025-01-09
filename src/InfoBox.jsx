import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({Info}){
    const DUST_URL="https://images.unsplash.com/photo-1693711836001-99859bb7185a?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg="
    const NICE_URL="https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="InfoBox">
           
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}    
        image={Info.humidity>50 ? RAIN_URL:Info.temp>25 ? HOT_URL : NICE_URL} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' } }>
          
           <p> Temperature={Info.temp}&deg;C</p>
         <p>  Humidity={Info.humidity}</p>
         <p>Min Temp={Info.tempMin}&deg;C</p>
         <p>Max Temp={Info.tempMax}&deg;C</p>
         <p>Weather can be  described as <i>{Info.weather}</i> and feels Like:{Info.feelsLike}&deg;C</p>


          
        </Typography>
      </CardContent>
      
    </Card>
    
    </div>
    <p>Made with 🤍ྀི  by Saket</p>
        </div>
      
    )
}