import React from 'react'

export default function Carsform() {
  return (
    <div className='p-6 bg-base-200 border border-gray w-full flex flex-col justify-center items-center'>
        <div className='p-6 bg-white border card shrink-0 w-full max-w-md shadow-2xl '>
        <h1 className="text-3xl font-bold text-center">Fill this form</h1> <br />
            <div className='flex items-center gap-x-4'>
            <label htmlFor="">Car's Name</label>
            <input type="text" placeholder="Type here" className="input input-bordered " />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Model Year</label>
        <input type="text" placeholder="Type here" className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Car's Color</label>
        <input type="text" placeholder="Type here" className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Car's ID</label>
        <input type="Number" placeholder="Type here" min={'1'} className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Price Per Week</label>
        <input type="Number" placeholder="The price/week in DNT" min={'350'} className="input input-bordered  max-w-xs" required/>
        </div>
        <br />

        <label className="form-control w-full max-w-xs">
            <div className="flex items-center gap-x-2">
                <label htmlFor="">Current Status</label>
                <select className="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Rented</option>
                    <option>Reserved For Renting</option>
                    <option>Availble</option>
                    <option>Not Available</option>
                </select>
            </div>
            <br />

            <label className="form-control">
                <span className="flex items-center gap-x-4">Description</span>
                <textarea className="textarea textarea-bordered h-20" placeholder="Write any important comments here"></textarea>
            </label>
            
        </label>
        <br />
        <div className="form-control">
          <button className="btn btn-primary">Save</button>
        </div>

        
        </div>
    </div>
  )
}
