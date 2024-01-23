import React from 'react'

export default function Account() {
  return (
    <div className='p-6 bg-base-200 border border-gray w-full flex flex-col justify-center items-center'>
        <div className='p-6 bg-white border card shrink-0 w-full max-w-md shadow-2xl'>
        <h1 className="text-3xl font-bold text-center">Sign Up!</h1> <br />

        <div className='flex items-center gap-x-4'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Type here" minLength={2} className="input input-bordered " />
            </div>  
        <br />

        <div className='flex items-center gap-x-4'>
            <label htmlFor="">SurName</label>
            <input type="text" placeholder="Type here" minLength={2} className="input input-bordered " />
            </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder="example@gmail.com"  className="input input-bordered  max-w-xs" required/>
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Use a strong one"  className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Confirm Your Password</label>
        <input type="password" placeholder="*****"  className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Phone Number</label>
        <input type="Tel" placeholder="+21697000000" maxLength={8} className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
            <label htmlFor="">Gender: </label> <br />
            <input type="radio" name="radio-1" className="radio"/>
            <label htmlFor="">Male</label>
            <input type="radio" name="radio-1" className="radio" />
            <label htmlFor="">Female</label>
        </div>
        
        
        <br />
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
        </div>

        </div>
    </div>
  )
}
