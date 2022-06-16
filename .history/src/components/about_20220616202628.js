import React from 'react';

const About = ({ basics }) => (
  <section id="about" className="row">
    <aside className="col-sm-3">
      <h3>About</h3>
    </aside>
    <div className="col-sm-9">
      {basics.summary.map((summ)=)}
      {/* <p>{basics.summary}</p> */}
    </div>
  </section>
);

export default About;
