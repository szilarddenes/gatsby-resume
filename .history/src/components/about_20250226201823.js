import React from 'react';

const About = ({ basics }) => (
  <section id="about" className="row">
    <aside className="col-sm-3">
      <h3>About</h3>
    </aside>
    <div className="col-sm-9">
      <ul>
      {basics.summary.map((summ, index) => (
        <li key={index} className='bullet'>{summ}</li>
      ))}
      </ul>
    </div>
  </section>
);

export default About;
