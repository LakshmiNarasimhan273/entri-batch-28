import React from 'react'
import Avatar from "./Avatar";
import Role from "./Role";
import Information from "./Information";
import Button from "./Button";

function ProfileCard(props) {
  console.log(props.user)
  /*
  name - profile card
  email - information
  role - role
  location - information
  skills - information
  bio - information
  image - avatar
  online - avatar
  */ 
  return (
    <div className='bg-white shadow-xl rounded-2xl p-6 w-96'>
      <div className='flex flex-col items-center'>
        <Avatar image={props.user.image} online={props.user.isOnline} />
          <h2 className='text-xl font-bold mt-4'>{props.user.name}</h2>
        <Role role={props.user.role} />

        <div className='mt-6 space-y-2'>
          <Information label="Email" value={props.user.email} />
          <Information label="Location" value={props.user.location} />
          <Information label="Skills" value={props.user.skills} />
          {
            props.user.bio ? (
              <Information label="Bio" value={props.user.bio} />
            ) : (
              <p className='text-sm text-gray-500'>No bio available</p>
            )
          }
        </div>

        <div className='flex justify-center gap-3 mt-6'>
          <Button label="Follow" type="primary" />
          <Button label="Message" type="secondary" />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard