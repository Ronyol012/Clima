import React from 'react'
import './climaestilo.css'



/*Importando todas las imagenes desde Assets*/


import search_icon from '../Imagenes/search.png'
import clear_icon from '../Imagenes/clear.png'
import cloud_icon from '../Imagenes/cloud.png'
import drizzle_icon from '../Imagenes/drizzle.png'
import humidity_icon from '../Imagenes/humidity.png'
import rain_icon from '../Imagenes/rain.png'
import snow_icon from '../Imagenes/snow.png'
import wind_icon from '../Imagenes/wind.png'



/*Tomar el ciuenta rony, que el nombre no sea igual al del proyecto *Genio* 
Primera letra mayusC */
export const Climaestate = () => {

    /*Inicio de conexion con el API */
    /*Este ApiKey lo entrega la pagina de Open Weather Map  */
    /*Se nesecita la extension de Thunder Client */
    let apiKeyClima = "e6966a04c72828fa33ef0cc7ee6a6d4a";

    /*Creamos la funcion  de Busqueda en el API, conecto al icono de busqueda con el Onlick, la funcion debe ser asyncrona (async) */
    const buscar = async () =>{
        const element = document.getElementsByClassName("InputCiudad")

        /*Agregamos este if para que la funcion no se ejecute sin valor */
         if(element[0].value === "")
         {
            return 0;
         }

         /*Con la Ejecucion del GET bien, realizada en Thunder Client, vamos a crear la conexion  */
         /*Dentro del enlace del GET debemos sustituir dos cosas
         #1 - Q = Ciudad / Sera igual al Q = ${Mivariableciudad}
         #2 - appid = e6966a04c72828fa33ef0cc7ee6a6d4a / Pasa a ser mi variable ${apiKeyClima}
         */

         let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKeyClima}`;

         /*Ahora haremos el fetch con mi variable url de arriba para obtener los datos*/

         let response = await fetch(url);
         /*Debemos pasar los datos a formato json */

         let data =  await response.json();
         const humedad = document.getElementsByClassName("Porcentaje-Humedad");
         const viento = document.getElementsByClassName("velocidad-viento");
         const temperatura = document.getElementsByClassName("temperatura")
         const licacion = document.getElementsByClassName("location")

         /*Ahora completamos los datos, guindonos de como nos lo mostro el get anterior */

         
    }


  return (
    <div className='Container'>
        <div className="titulo">
            Consultor del Cima
        </div>
        <div className="top-bar">
             {/*Voy a Leer el dato desde el input, definido con el get by classname */}
            <input type="text" name="" id="" className="InputCiudad" placeholder='Buscar Ciudad' />
            {/*El div sera mucho mejor para manejar tamaños, pero probare la sombra directamente con la imagen para mejor estilo del css */}
            <div className="search-icon" onClick={() => (buscar())}>
                <img src={search_icon} alt="" srcset="" />
            </div>
        </div>

             <div className="Imagen-Nube imagen">
                <img src={cloud_icon} alt="" />
            </div>
            
            <div className="temperatura">
                64 °C
            </div>
            <div className="location">
                Santo Domingo
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon " />
                    <div className="data">
                        <div className="Porcentaje-Humedad">
                            64
                        </div>
                        <div className="text">Humedad</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="velocidad-viento">
                            18 km/h
                        </div>
                        <div className="text">Viento</div>
                    </div>
                </div>
            </div>

    </div>
  )
}
