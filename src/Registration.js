import React from 'react';
import Cookies from 'js-cookie';

const Registration = (props) => {

    const { callback } = props

    return <div>
                <p>Créer un compte</p>
                <form onSubmit={callback}>
                    <label>Nom d'utilisateur :</label>
                    <input id="username" type="text"></input><br></br>
                    <label>Adresse électronique :</label>
                    <input id="email" type="text"></input><br></br>
                    <label>Mot de passe :</label>
                    <input id="password" type="password"></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
}

export default Registration