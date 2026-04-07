import React from 'react'

function Home(props) {
  return (
    <div>
        <h4>{props.userData.name}</h4>
        <p>{props.userData.role}</p>
        {
            props.userData.loginStatus ? (
                <p>Loggedin</p>
            ) : (
                <p>Not logged in</p>
            )
        }
    </div>
  )
}

export default Home