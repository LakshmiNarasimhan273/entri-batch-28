import React from 'react'
import Lms from './Lms'

function Entri() {
  const user = {
    name: "Narasimhan",
    role: "Learner",
    isLoggedin: true
  }

  return (
    <div>
      <Lms data={user} />
    </div>
  )
}

export default Entri