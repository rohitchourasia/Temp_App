import React,{useState,useEffect} from 'react';
import "./css/style.css";
const Temp=()=>{
    const[city,setCity]= useState(null);
    const [search,setSearch]= useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eae9d663128a9ad792f824b68460a528`
            const res = await fetch(url);
        
            
            const resJson= await res.json();
            console.log(resJson);
            
            setCity(resJson.main);
            

        }
        fetchApi()
    },[search])


    return (
        <>
            <div className="box">
              <div className='inputfield' > 
                <input type="search"
                className="inputField"
                onChange={(event=>{
                    setSearch(event.target.value)
                })}
                />
                </div>
        {!city?(<p>NO data found</p>):(       
               
            <div>
            <div className="info" >
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                    </h2>
                <h1 className='temp'>
                    {city.temp}°F

                    </h1>   
                <h3 className='temp_check'> Min:{city.temp_min}°F|Max:{city.temp_max}°F</h3>     

                </div>
            </div>
        )}
        <section>
        <div className='wave1'></div>
        <div className='wave2'></div>
        <div className='wave3'></div>
        </section>
        </div>
        </>
    )
        }
    export default Temp;



            

    
