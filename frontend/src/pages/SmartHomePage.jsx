import camara from "../img/home/camara.jpg"
import cerradura from "./../img/home/cerradura.jpg"
import frigorifico from "./../img/home/frigo.jpg"
import led from "./../img/home/led.png"
import portaretrato from "./../img/home/portaretrato.jpg"
import sensor from "./../img/home/sensor.jpg"
import termostato from "./../img/home/termostato.jpg"
import timbre from "./../img/home/timbre.jpg"

import { useState } from "react"
import { Title, Subtitle } from "../components/Titles"

import "./../css/SmartHome.css"

const dispositivos = [
    {
        img: camara,
        nombreImg: "Cámara de seguridad",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: cerradura,
        nombreImg: "Cerradura",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: frigorifico,
        nombreImg: "Frigorífico",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: led,
        nombreImg: "Luces LED",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: portaretrato,
        nombreImg: "Portarretrato",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: sensor,
        nombreImg: "Sensor de movimiento",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: termostato,
        nombreImg: "Termostato",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        img: timbre,
        nombreImg: "Timbre",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]


function SmartHomePage() {

    const [bigBox, setBigBox] = useState(dispositivos[0])

    const handleClick = (e) => {
        setBigBox([...dispositivos].filter(dispositivo => dispositivo.nombreImg === e.target.alt)[0])
    }

    return (
        <div>
            <Title txt={"SmartHome"}/>
            <div className="bigBox">
                <img src={bigBox.img} alt={bigBox.nombreImg} />
                <div>
                    <Subtitle txt={bigBox.nombreImg} />
                    <p style={
                    {   
                        paddingTop: "2rem",
                        fontSize: "2em",
                    }
                    }>{bigBox.desc}</p>
                </div>
            </div>
            <div className="grid">
                {dispositivos.map((dispositivo, index) => (
                    <div key={dispositivo.nombreImg} className="imgBox">
                            <img src={dispositivo.img} alt={dispositivo.nombreImg} onClick={handleClick}/>
                        </div>)
                )}
            </div>
        </div>
    )
}

export default SmartHomePage;