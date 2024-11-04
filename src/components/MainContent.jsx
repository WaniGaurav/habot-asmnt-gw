import React from 'react'
import './MainContent.css'
import bgImg from '../assets/bg-img.png'
import SectionOne from './SectionOne';
import SectionTabFills from './SectionTabFills';

function MainContent() {
   
  return (
    <>
        <div className="card text-bg-dark">
            <img src={bgImg} className="card-img opacity-50" alt="Services required overlay image" />
            <div className="card-img-overlay d-flex align-items-center">
                <div className="container">

                    <p className="fs-1 fw-bolder m-0"> Are You a Supplier?</p>
                    <p className="fs-1">Explore Matching Opportunities.</p>

                    <form className="row gy-2 gx-3 align-items-center justify-content-center my-4">
                        <div className="col-auto col-sm-4">
                            <div className="input-group">
                                <div className="input-group-text material-symbols-outlined border-end-0 fs-4" style={{'color' : '#E7760D'}}>business_center</div>
                                <input type="text" className="form-control border-start-0" id="autoSizingInput" placeholder="Search your required service here" />
                            </div>
                        </div>
                        <div className="col-auto col-sm-4">
                            <div className="input-group">
                                <div className="input-group-text material-symbols-outlined border-end-0 fs-4" style={{'color' : '#E7760D'}}>location_on</div>
                                <input type="text" className="form-control border-start-0" id="autoSizingInputGroup" placeholder="Search your desired location here" />
                            </div>
                        </div>
                        <div className="col-auto">
                                <button type="submit" className="btn btn-success fw-bolder" style={{'padding': '0.8rem 2rem'}}>Search</button>
                        </div>
                    </form>

                    <p> <span className="fw-bolder"> Are you a buyer?&nbsp;&nbsp;&nbsp;</span><a className="text-white link-opacity-75-hover" href="#">Click here if you are looking to post a requirements</a></p>
                </div>
            </div>
        </div>
        <SectionOne />
        <SectionTabFills />
    </>
  )
}

export default MainContent;