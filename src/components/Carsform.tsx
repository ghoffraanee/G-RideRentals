"use client";
import React from 'react';
import { CreateCar } from '@/operations/operations';
import { useState } from 'react';

export default function Carsform() {
  const [name, setName] = React.useState('');
  const [year, setYear] = React.useState('');
  const [color, setColor] = React.useState('');
  const [price, setPrice] = React.useState("");
  const [status, setStatus] = React.useState('');
  const [description, setDescription] = React.useState('');
  
  return (
    <div className='p-6 bg-base-200 border border-gray w-full flex flex-col justify-center items-center'>
      <div className='p-6 bg-white border card shrink-0 w-full max-w-md shadow-2xl '>
        <h1 className='text-3xl font-bold text-center'>Fill this form</h1> <br />
        <div className='flex items-center gap-x-4'>
          <label htmlFor='name'>Car's Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Type here'
            className='input input-bordered'
          />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
          <label htmlFor='year'>Model Year</label>
          <input
            onChange={(e) => setYear(e.target.value)}
            type='text'
            placeholder='Type here'
            className='input input-bordered  max-w-xs'
          />
        </div>
        <br />

        <div className='flex items-center gap-x-4'>
          <label htmlFor='color'>Car's Color</label>
          <input
            onChange={(e) => setColor(e.target.value)}
            type='text'
            placeholder='Type here'
            className='input input-bordered  max-w-xs'
          />
        </div>
        <br />

      
        <div className='flex items-center gap-x-4'>
          <label htmlFor='price'>Price Per Week</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type='Number'
            placeholder='The price/week in DNT'
            min={'350'}
            className='input input-bordered  max-w-xs'
            required
          />
        </div>
        <br />

        <label className='form-control w-full max-w-xs'>
          <div className='flex items-center gap-x-2'>
            <label htmlFor='status'>Current Status</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className='select select-bordered'
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Rented</option>
              <option>Reserved For Renting</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>
          <br />

          <label className='form-control'>
            <span className='flex items-center gap-x-4'>Description</span>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className='textarea textarea-bordered h-20'
              placeholder='Write any important comments here'
            ></textarea>
          </label>
        </label>
        <br />
        <div className='form-control'>
          <button
          onClick={() => CreateCar(name, year, color, price, status, description)}
            className='btn btn-primary'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
