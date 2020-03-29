import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'

export default function Register() {
    return (
        <div className="register-container" >
            <div className="content" >
                <section>
                    <img src={logo} alt="Be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"> </FiArrowLeft>
                    Não tenho cadastro</Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />
                    <div className=" input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}