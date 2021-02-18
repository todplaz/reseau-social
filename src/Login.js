import React from 'react';
import Cookies from 'js-cookie';


const Login = (props) => {


    return <div>
                <p>Vous avez déjà un compte ?</p>
                <p>Connectez-vous !</p>
               <form onSubmit={props.callback}>
                    <label>Nom d'utilisateur ou adresse e-mail :</label>
                    <input onChange={props.identifierCallback} type="text"></input><br></br>
                    <label>Mot de passe :</label>
                    <input onChange={props.passwordCallback} type="password"></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
}

export default Login