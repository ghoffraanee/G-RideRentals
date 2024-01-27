import React from 'react'
import { getAllCars } from '@/operations/operations'
export default async function AllCars() {

const cars = await getAllCars();

  return (
    <div className='p-6 bg-base-200 border border-gray w-full flex flex-col justify-center items-center'>
        <div className='p-6 bg-white border card shrink-0 w-full max-w-md shadow-2xl'>
        <h1 className="text-3xl font-bold text-center">List Of Available Cars</h1> <br/>
        </div>
        {cars.map((car) => (
            <div className='p-6 bg-white border card shrink-0 w-full max-w-md shadow-2xl' key={car.id}>
                <h1 className="text-3xl font-bold text-center">{car.name}</h1> 
                <h1 className="text-3xl font-bold text-center">{car.price}</h1> 
                <h1 className="text-3xl font-bold text-center">{car.description}</h1> 
                <h1 className="text-3xl font-bold text-center">{car.color}</h1>
                <h1 className="text-3xl font-bold text-center">{car.status}</h1>
                <h1 className="text-3xl font-bold text-center">{car.year}</h1> 
            </div>
        )
        )}
    </div>
  )
}
