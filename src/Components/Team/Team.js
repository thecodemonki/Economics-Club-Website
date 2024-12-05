import React from 'react';
import './Team.css'; // Link the CSS file

const teamMembers = [
  {
    name: "John Doe",
    title: "Teacher",
    image: "path/to/john_doe.jpg"
  },
  {
    name: "Jane Smith",
    title: "VP",
    image: "path/to/jane_smith.jpg"
  },
  {
    name: "Alice Johnson",
    title: "VP",
    image: "path/to/alice_johnson.jpg"
  },
  {
    name: "Bob Brown",
    title: "President",
    image: "path/to/bob_brown.jpg"
  },
  {
    name: "Charlie Davis",
    title: "Exec",
    image: "path/to/charlie_davis.jpg"
  },
  {
    name: "Dana White",
    title: "Exec",
    image: "path/to/dana_white.jpg"
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