import React from 'react'

const Trainings = ({ trainings }) => (
  <section id='training' className='row'>
    <aside className='col-sm-3'>
      <h3>Trainings</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        {trainings.map((training) => (
          <div className='col-lg-12'>
            <h4 className='strike-through'>
              <span>{training.title}</span>
              <span className='date'>
                {training.startDate} —{' '}
                {!!training.endDate ? training.endDate : `present`}
              </span>
            </h4>
            <div className="flexSpan">
            <div className='website pull-right'>{training.location}</div>
            <div className='position'>held by: {training.heldBy}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Trainings