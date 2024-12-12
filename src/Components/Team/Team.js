import React from 'react';
import akhil from '../../Assets/akhil.png'
import yuehang from '../../Assets/yuehang.png'
import aayan from '../../Assets/aayan.png'
import owen from '../../Assets/owen.png'
import kaur from '../../Assets/kaur.jpeg'
import yashas from '../../Assets/yashas.png'
import './Team.css'; 

const teamMembers = [
  {
    name: "Parwinder Kaur",
    title: "Teacher",
    image: kaur
  },
  {
    name: "Owen Hu",
    title: "President",
    image: owen
  },
  {
    name: "Aayan Rahman",
    title: "Vice President, Tech Lead",
    image: aayan
  },
  {
    name: "Yuehang Guan",
    title: "Vice President, Olympiad Lead",
    image: yuehang
  },
  {
    name: "Akhil Agarwal",
    title: "Director of Teaching",
    image: akhil
  },
  {
    name: "Yashas Mehta",
    title: "Director of Marketing",
    image: yashas
  }
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