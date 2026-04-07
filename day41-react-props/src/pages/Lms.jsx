import React from 'react'
import Button from "../components/Button";
import Learner from '../components/Learner';
import Admin from '../components/Admin';

function Lms(props) {
    return (
        <div>
            {
                props.data.isLoggedin ? (
                    <div>
                        <h1>Hello Welcome back, {props.data.name}</h1>

                        {
                            props.data.role === "Learner" ? (
                                <Learner />
                            ) : props.data.role === "Mentor" ? (
                                <Admin />
                            ) : (
                                <p>Access Denied</p>
                            )
                        }

                    </div>
                ) : (
                    <div>
                        <h3>Please Login</h3>
                        <Button label="Login" />
                    </div>
                )
            }
        </div>
    )
}

export default Lms