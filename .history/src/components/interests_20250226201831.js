import React from 'react';

const Interests = ({ interests }) => (
	<section id="interests" className="row">
		<aside className="col-sm-3">
			<h3>Interests</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{interests.map((interest, index) => (
        <div key={index} className="col-sm-6">
          <div className="name">
            <h4 className="colorGreen">{interest.name}</h4>
          </div>
          <ul className="keywords">
            {interest.keywords.map((keyword, kidx) => (
              <li key={kidx}>{keyword}</li>
            ))}
          </ul>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Interests;
