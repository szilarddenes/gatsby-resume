import React from 'react';

const References = ({ references = [] }) => {
	if (!references || references.length === 0) {
		return null;
	}

	return (
		<section id="references" className="row">
			<aside className="col-sm-3">
				<h3>References</h3>
			</aside>
			<div className="col-sm-9">
				<div className="row">
					{references.map((reference, index) => (
						<div key={index} className="col-sm-12">
							<blockquote className="reference">
								<p>{reference.reference}</p>
								<p className="name">
									<strong>— <a href={reference.link} target="_blank" rel="noopener noreferrer">{reference.name}</a></strong>
								</p>
							</blockquote>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default References;
