import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

const LoggedIn = (props) => {

    return (
        <div>
            <p style={{fontWeight: "bold"}}>Vous êtes connecté</p><p onClick={props.callback}>Se déconnecter</p>
        </div>
    )
}

export default LoggedIn