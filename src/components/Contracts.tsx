"use client";
import React from 'react'

export default function Contracts() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className='p-6 bg-white mt-7 border card shrink-0 w-full max-w-2xl shadow-2xl '>
        <h1 className="text-3xl font-bold text-center">Contract</h1> <br />
  
        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Unique Contract Name</label>
        <input type="text" placeholder="Seller's Name or ID" className="input input-bordered " />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Type here" className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Phone Number</label>
        <input type="Tel" placeholder="+21697000000" className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Postal Code</label>
        <input type="Number" placeholder="Type here" min={'1000'} className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder="example@gmail.com"  className="input input-bordered  max-w-xs" required/>
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Current Address</label>
        <input type="text" placeholder="Street,Building.." className="input input-bordered  max-w-xs" />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
        <label htmlFor="">Delivery Address</label>
        <input type="text" placeholder="Street,Building.." className="input input-bordered  max-w-xs" />
        </div>
        <br />
        

        <div className="overflow-x-auto">
            <table className="table">
                <tr>
                    <td>Starting Date</td>
                    <input type="date"   className="input input-bordered  max-w-xs" required/>
                    <td>Ending Date</td>
                    <input type="date"   className="input input-bordered  max-w-xs" required/>
                </tr>
            </table>
        </div>
        
        <br />
        <div className="form-control ">
          <button className="btn btn-primary">Send</button>
        </div>

        
        </div>
    </div>
    
  )
}
