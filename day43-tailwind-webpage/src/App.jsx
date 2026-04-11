import React from 'react'
import ProfileCard from './components/ProfileCard';

function App() {

  const userData = {
    name: "Narasimhan",
    role: "Mentor",
    email: "narasimhan@mail.com",
    location: "Kumbakonam, India",
    skills: "MERN Stack",
    bio: "AI enhanced FSD Mentor and passionate backend developer",
    image: "https://i.pinimg.com/736x/91/53/5b/91535bc90a800b532116028457cdd0f9.jpg",
    isOnline: true
  };

  const developer = {
    name: "Someone",
    role: "Developer",
    email: "someone@mail.com",
    location: "Trichy, India",
    skills: "Java FSD",
    bio: "AI enhanced FSD Mentor and passionate backend developer",
    image: "https://i.pinimg.com/736x/c5/df/67/c5df670a013d2643d0d16febd2624d9a.jpg",
    isOnline: false
  }

  return (
    // ALD - Architecture Level Development
    <div className='min-h-screen bg-gray-100 flex items-center gap-3 justify-center'>
      <ProfileCard user={userData} />
      <ProfileCard user={developer} />
    </div>
  )
}

export default App