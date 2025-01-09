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
    name: "Yashas Mehta",
    title: "Vice President of Outreach",
    image: 'https://i.ibb.co/hfqLtV1/yashas.png'
  },
  {
    name: "Stephanie Zheng",
    title: "Director of Marketing",
    image: 'https://i.ibb.co/GnY2Nd5/stephanie.png'
  },
  {
    name: "Maxwell Peng",
    title: "Teaching Director",
    image: 'https://i.ibb.co/mDsvxHw/maxwell.png'
  },
  {
    name: "Joshua Lin",
    title: "Questions Commitee",
    image: 'https://i.ibb.co/z5jT0mk/josh.png'
  },
  {
    name: "Adi Arora",
    title: "Questions Commitee",
    image: 'https://i.ibb.co/n3QP3jc/adi-1.png'
  }

];

// <a href="https://ibb.co/dc1wzfh"><img src="https://i.ibb.co/z5jT0mk/josh.png" alt="josh" border="0"></a>
// <a href="https://ibb.co/rb5dbH6"><img src="https://i.ibb.co/n3QP3jc/adi-1.png" alt="adi-1" border="0"></a>

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