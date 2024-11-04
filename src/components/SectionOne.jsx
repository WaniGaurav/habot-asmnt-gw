import React from 'react'

function SectionOne() {
    let btnRow1 = [
        {
            id:1,
            label:'Abu Dhabi',
        },
        {
            id:2,
            label:'Dubai',
        },
    ];
    let btnRow2 =[
        {
            id:3,
            label:'Sharjah & Ajman',
        },
        {
            id:4,
            label:'Fujairah',
        },
    ];
    let btnRow3= [
        {
            id:5,
            label:'Ras Al Khaimah',
        },
        {
            id:6,
            label:'Umm Al Quwain',
        },
    ];
  return (
    <div className="container" style={{'padding' : '5rem'}}>
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-start border-0">
                <div className="card-body">
                    <p className="card-title fs-3 fw-bolder">Ready to dive into <span className="" style={{'color' : '#452c63'}}>HABOT?</span></p>
                    <p className="card-text my-4">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn text-white d-flex px-4 py-2" style={{'backgroundColor' : '#00732F'}}>Sign up Today ! <span className="material-symbols-outlined mx-4">trending_flat</span></button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="container mt-3">
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col text-center">
                        {btnRow1.map((btns) => (
                            <button key={btns.id} type="button" className={`btn rounded`} style={{'border' : '1px solid orange', 'width' : '12rem', 'height' : '4rem', 'margin' : '0.6rem 0.6rem'}}>
                            {btns.label}
                            </button>
                        ))}
                        </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="row">
                        <div className="col text-center">
                        {btnRow2.map((btns2) => (
                            <button key={btns2.id} type="button" className={`btn rounded`} style={{'border' : '1px solid orange', 'width' : '12rem', 'height' : '4rem', 'margin' : '0.6rem 0.6rem'}}>
                            {btns2.label}
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="row">
                        <div className="col text-center">
                        {btnRow3.map((btns3) => (
                            <button key={btns3.id} type="button" className={`btn rounde`} style={{'border' : '1px solid orange', 'width' : '12rem', 'height' : '4rem', 'margin' : '0.6rem 0.6rem'}}>
                            {btns3.label}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SectionOne