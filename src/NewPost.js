import React from 'react';
import Cookies from 'js-cookie';


const NewPost = (props) => {


    return <div>
                <hr></hr>
                <p>Rédigez un nouveau post :</p>
                <form onSubmit={props.submit}>
                    <textarea style={{ width: '400px', height: '100px'}} onChange={props.callback}></textarea>
                    <button>Valider</button>
                </form>
            </div>
}

export default NewPost