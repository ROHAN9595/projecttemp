import React,{useState, useEffect} from 'react';
import './css/style.css';

const Newtemp =()=>{
     const [city, setcity] = useState("null");
     const [search, setsearch]=useState("Mumbai");
        
      useEffect( () => {
         const fetchApi = async()=>{
            const url='http://api.openweathermap.org/data/2.5/weather?q=${search}&appid={06cfaa0e7f4fa6854b5bbdd55491aa12}'
            const response= await fetch(url);
            const resJson= await response.json();
            //console.log(resJson); 
            setcity(resJson.main)
        };
          fetchApi();         
     },[search])
     return(
        <React.Fragment>
        <div className= "box">
        <div className="inputdata">
        <input className="inputfield"
        type="search"
        onChange={(event) =>{ setsearch(event.target.value)}}> 
        </input>
        </div>

        {
            ! city ? (
                <p> No Data Found</p>
            ) :(
                <div>
                <div className="info">
                <i className="fas fa-street-view"></i>{search}
                <h1 className="temp">{city.temp} </h1><br></br>
                <h3 className="temp1">  Min-temp:{city.temp} & mix-temp:{city.temp}</h3>
                </div>
                <div className="wave"></div>
                <div className="wavetwo"></div>
                <div className="wavethree"></div>
                </div>

            )
        }
        
        </div>

        </React.Fragment>
    );
};
export default Newtemp;