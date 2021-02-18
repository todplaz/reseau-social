import React from 'react';
import Cookies from 'js-cookie';


const UpdateProfile = () => {

    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    fetch('http://localhost:1337/users/me', {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then(data => {
            setUsername(data.username)
            setEmail(data.email)
        })

    return <div>
    <p>Vous souhaitez modifier vos informations personnelles ?</p>
    <p>C'est ici :</p>
    <form>
        <label>Nom d'utilisateur : </label>
        <input id="username" type="text" value={username}></input><br></br>
        <label>Adresse électronique : </label>
        <input id="email" type="text" value={email}></input><br></br>
        <label>Mot de passe :</label>
        <input id="password" type="password"></input><br></br>
        <input type="submit" value ="Je valide ces modifications"></input>
    </form>
</div>
}

export default UpdateProfile