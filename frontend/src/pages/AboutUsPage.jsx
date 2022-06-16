import { Title, Subtitle } from '../components/Titles';
import img from '../img/portrait.png'
import "./../css/AboutUs.css"

function AboutUsPage() {
    return (
        <div>
            <div className='info'>
                <img src={img} alt="retrato" className='retrato'/>
                <div>
                    <Subtitle txt={"Nombre Apellido"} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eum tempore! Ex soluta incidunt est vitae voluptatibus iste dolores autem nam hic dicta. Atque facere enim optio placeat quia corporis.</p>
                </div>
            </div>
            <div className='contacto'>
                <Title txt={"Contacto"}/>
                <form className='formulario'>
                    <div className='tres-input'>
                        <input className='input campo' name="nombre" type="text" placeholder='Nombre' required/>
                        <input className='input campo' name="main" type="email" placeholder='Email' required/>
                        <input className='input campo' name="asunto" type="text" placeholder='Asunto' required/>
                    </div>
                    <div className='text-area'>
                        <textarea name="mensaje" placeholder='Mensaje' className='text-area campo' required/>
                    </div>
                    <button className='button campo' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default AboutUsPage;