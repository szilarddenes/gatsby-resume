import React from 'react'

const Trainings = ({ trainings }) => (
  <section id='training' className='row'>
    <aside className='col-sm-3'>
      <h3>Trainings</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        {trainings.map((training) => (
         <div className='col-sm-12'>
         <h4 className='strike-through'>
           <span>{training.name}</span>
           <span className='date'>
             {/* {training.startDate} — {(()=>{ training.endDate ? training.endDate : "present"})} */}
             {training.startDate} — {!!training.endDate ? training.endDate : `present`}
           </span>
         </h4>
         <div className='website pull-right'>
           <a href={training.url}>{training.url}</a>
         </div>
         <div className='position'>{training.position}</div>
         <div className='summary'>
           <p>{training.summary}</p>
         </div>
         
       </div>
        ))}
      </div>
    </div>
  </section>
)

export default Trainings
