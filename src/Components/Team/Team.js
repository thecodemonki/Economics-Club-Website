import React from 'react';
//import stephanie from '../../Assets/stephanie.png'
//import yuehang from '../../Assets/yuehang.png'
//import aayan from '../../Assets/aayan.png'
//import owen from '../../Assets/owen.png'
///import kaur from '../../Assets/kaur.jpeg'
//import yashas from '../../Assets/yashas.png'
import './Team.css'; 

/*
  https://ibb.co/7z7CYrN
https://ibb.co/dtSJPCM
https://ibb.co/JrvVKyB
https://ibb.co/8PhNYwp
https://ibb.co/ckfFVyr
https://ibb.co/JyVF18V
https://ibb.co/C2rmTQs
https://ibb.co/Y79gcDp
https://ibb.co/mDsvxHw

https://ibb.co/mDsvxHw
*/

const teamMembers = [
  {
    name: "Parwinder Kaur",
    title: "Teacher",
    image: 'https://i.ibb.co/xz1WDfC/kaur.jpg'
  },
  {
    name: "Owen Hu",
    title: "President",
    image: 'https://i.ibb.co/VMKJwGZ/owen.png'
  },
  {
    name: "Aayan Rahman",
    title: "Vice President, Tech Lead",
    image: 'https://i.ibb.co/6Z6wnDJ/aayan.png'
  },
  {
    name: "Yuehang Guan",
    title: "Vice President, Olympiad Lead",
    image: 'https://i.ibb.co/JRLZvx5/yuehang.png'
  },
  {
    name: "Stephanie Zheng",
    title: "Director of Operations",
    image: 'https://i.ibb.co/GnY2Nd5/stephanie.png'
  },
  {
    name: "Yashas Mehta",
    title: "Director of Marketing",
    image: 'https://i.ibb.co/hfqLtV1/yashas.png'
  }
  /*
  {
    name: "Maxwell Peng",
    title: "Teaching Director",
    image: 'https://i.ibb.co/mDsvxHw/maxwell.png'
  }
    */
];

function Team() {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;