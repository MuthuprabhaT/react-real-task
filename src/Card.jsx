import React from 'react'

function Card(props) {
  return (
    <>
    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="card my-4">
            <div className="card-body ">
                <h6 className="text-muted text-center">{props.data.plan}</h6>
                <h1 className="text-center">{props.data.price}</h1>
                <hr />
                <ul className="fa-ul ">
                    {props.data.features.map((feature,index)=>(
                         <li key={index} className={feature.isEnabled?"":"text-muted"}>
                            <span className='py-5'>
                                <i className={`fa ${feature.isEnabled?'fa-check':'fa-xmark'}`}></i>
                            </span>{feature.name}
                         </li>
                    ))}
                </ul>
                <div className="d-grid d-block">
                    <button className="btn btn-primary btn-block text-center p-2 rounded-5">BUTTON</button>
                </div>
            </div>
        </div>
    </div>
       
       
    </>
  )
}

export default Card