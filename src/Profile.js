import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';


const Profile = () => {

    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {idSlug} = useParams()

    const fetchData = () => {
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
    }

        useEffect(() => {
            fetchData()
        }, [])

    return <div>
    <p>Récapitulatif de vos informations personnelles ?</p>
    <br></br>
    <form>
        <label>Nom d'utilisateur : </label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" value={username}></input><br></br>
        <label>Adresse électronique : </label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" value={email}></input><br></br>
        <label>Mot de passe : </label>
        <input id="password" type="password"></input><br></br>
        <input type="submit" value ="Je valide ces modifications"></input>
    </form>
</div>
}

export default Profile