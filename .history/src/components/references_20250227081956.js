import React from 'react';

const References = ({ references }) => (
	<section id="references" className="row">
		<aside className="col-sm-3">
			<h3>References</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{references.map(reference => (
        <div className="col-sm-12">
          <blockquote className="reference">
            <p>{reference.reference}</p>
            <p className="name">
              <strong>— <a href={reference.link} target="_blank" rel="noopener noreferrer">{reference.name}</a></strong>
              <img 
                src="../img/ms_certification.webp"
                alt="Microsoft Certification"
                className="reference-icon"
                style={{
                  width: '24px',
                  marginLeft: '8px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </p>
          </blockquote>
        </div>
      ))}
			</div>
		</div>
	</section>
);

export default References;
