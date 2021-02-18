import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'


const NotLogged = (props) => {

    return (
        <div>
            <p style={{fontWeight: "bold"}}>Vous n'êtes pas connecté</p>< Link to="/login">Se connecter </Link> < Link to="/register">Créer un compte</Link>
        </div>
    )
}

export default NotLogged