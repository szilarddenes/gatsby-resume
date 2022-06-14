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
           <span>{work.name}</span>
           <span className='date'>
             {/* {work.startDate} — {(()=>{ work.endDate ? work.endDate : "present"})} */}
             {work.startDate} — {!!work.endDate ? work.endDate : `present`}
           </span>
         </h4>
         <div className='website pull-right'>
           <a href={work.url}>{work.url}</a>
         </div>
         <div className='position'>{work.position}</div>
         <div className='summary'>
           <p>{work.summary}</p>
         </div>
         {work.highlights && (
           <React.Fragment>
             <h4>Highlights</h4>
             <ul className='highlights'>
               {work.highlights.map((highlight) => (
                 <li className='bullet'>{highlight}</li>
               ))}
             </ul>
           </React.Fragment>
         )}
       </div>
        ))}
      </div>
    </div>
  </section>
)

export default Trainings
