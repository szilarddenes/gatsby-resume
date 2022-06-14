import React from 'react';

const Trainings = ({ trainings }) => (
	<section id="training" className="row">
		<aside className="col-sm-3">
			<h3>Trainings</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{trainingss.map(trainings => (
        <div className="col-sm-12">
          <h4 className="strike-through">
            <span>{trainings.title}</span>
          </h4>
          <div className="date pull-right">
            <em>trainingsed </em>
            {trainings.date}
          </div>
          <div className="trainingser">
            <em>by </em>
            <strong>{trainings.trainingser}</strong>
          </div>
          <div className="summary">
            {trainings.summary}
          </div>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default trainingss;