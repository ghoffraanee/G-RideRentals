"use client"

import React from 'react'

export default function About() {
  const [formData, setFormData] = React.useState({
    name: "ghofrane"
  });
  return (
    <div>
      <form>
        <input
          className='px-2 py-1.5 border border-gray-300'
          onChange={(e) => setFormData({name : e.target.value})}
          type='text'
          value={formData.name}
        />

        <h1>{formData.name}</h1>
      </form>
    </div>
  )
}
