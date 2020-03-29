import React from 'react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

function Logon({ title }) {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the hero" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit"> Entrar </button>

                    <a href="/register"> 
                    <FiLogIn size={16} color="#E02041"> </FiLogIn>
                    Não tenho cadastro</a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon