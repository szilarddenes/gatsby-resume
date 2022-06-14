import React from 'react'

const Trainings = ({ training }) => (
  <section id='training' className='row'>
    <aside className='col-sm-3'>
      <h3>Trainings</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        {trainings.map((training) => (
          <div className='col-sm-12'>
            <h4 className='strike-through'>
              <span>{training.title}</span>
            </h4>
            <div className='date pull-right'>
              <em>traininged </em>
              {training.date}
            </div>
            <div className='training'>
              <em>by </em>
              <strong>{training.heldBy}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Trainings
