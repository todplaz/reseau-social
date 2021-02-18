import React, {useState} from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import LoggedIn from './LoggedIn'
import NotLogged from './NotLogged'
import NewPost from './NewPost'
import Registration from './Registration'
import PrivateRoute from './PrivateRoute'
import Cookies from 'js-cookie';


const App = () => {

    const [authenticated, setAuthenticated ] = useState(Cookies.get('token'))
    const [userID, setUserID] = useState(Cookies.get('id'))

    const handleRegistration = (e) => {

        e.preventDefault()

        const registrationData = {
            username: e.target.querySelector('#username').value,
            email: e.target.querySelector('#email').value,
            password: e.target.querySelector('#password').value
          };

        fetch('http://localhost:1337/auth/local/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
            }).then(response => {
                if (response.ok) { 
                return response.json()
                .then(data => {
                    Cookies.set('token', data.jwt)
                    Cookies.set('id', data.user.id)
                })
            }
            else {
                return response.json()
                .then(data => console.log(data.data[0].messages[0].message))
            }} )

            setAuthenticated(true)
        }

        const cookieClear = () => {
            setAuthenticated("")
            setUserID("")
            Cookies.remove('token')
            Cookies.remove('id')
            
        }


    const [identifier, setIdentifier] = React.useState()
    const [password, setPassword] = React.useState()
    const [error, setError] = React.useState()

    const loginRequest = (e) => {

        e.preventDefault()
        console.log('gggg')

        const loginData = {identifier: identifier, password: password}
        console.log(loginData)
        console.log('gggg')

        fetch('http://localhost:1337/auth/local', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
            }).then(response => {
                if (response.ok) { 
                return response.json()
                .then(data => {
                    Cookies.set('token', data.jwt)
                    Cookies.set('id', data.user.id)
                    setAuthenticated(true)

                })
            }
            else {
                return response.json()
                .then(data => setError(data.data[0].messages[0].message))
            }} )
    }

    const passwordCallback = (e) => {
        setPassword(e.target.value)
   }

   const identifierCallback = (e) => {
    setIdentifier(e.target.value)
}

const [contentNewPost, setContentNewPost] = useState("")

const handleContentNewPost = (e) => {
    setContentNewPost(e.target.value)
}

const handleSubmissionNewPost = (e) => {

    e.preventDefault()

    const postData = { user: Cookies.get('id'), text: contentNewPost}

    fetch('http://localhost:1337/posts', {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${Cookies.get('id')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(res=> res.json()
        .then(data => console.log(data)))
    
    }
    

    return <Router>
                {authenticated ? < LoggedIn callback={cookieClear} /> : < NotLogged callback={cookieClear} />}
                <Route path = "/" exact>
                    <Home />
                    {authenticated && < NewPost callback={handleContentNewPost} submit={handleSubmissionNewPost} />}
                </Route>
                <Route path = "/register">
                    <Registration callback={handleRegistration} />
                </Route>
                <Route path = "/login">
                    {authenticated ? (<Redirect to={{ pathname: '/' }} />) : (<Login callback={loginRequest} passwordCallback={passwordCallback} identifierCallback={identifierCallback} />)}
                    {error && <p style={{color: "red"}}>{error}</p>}
                </Route>
                <Route path = "/profile">
                    {Cookies.get('id') && <Redirect to={{ pathname: `/users/${Cookies.get('id')}` }} />}
                </Route>
                <Route path = "/users/:idSlug">
                    {authenticated ? (<Profile />) : (<Redirect to={{ pathname: '/login' }} />)}
                </Route>
                <PrivateRoute path="/protected" />
            </Router>
}

ReactDom.render( < App />, document.getElementById('root'))