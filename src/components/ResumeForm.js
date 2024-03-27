import React from 'react'

function ResumeForm() {
    return (
        <div className='container'>
            <form action="" enctype="multipart/form-data">
                <div className="mb-3 text-left">
                    <label htmlFor="jobTitle" className='form-label'>Job Title</label>
                    <input className="form-control" type="text" placeholder='Job Title' id='jobTitle' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="jd">Job Description</label>
                    <input className='form-control' type="text" placeholder='Job Description' id='jd' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="resume" className='form-label'>Resume</label>
                    <input className='form-control' type="file" name="resume" id="resume" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ResumeForm