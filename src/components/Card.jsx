import React from 'react'
import { commercialrealestate } from '../static_data/staticdata'

export default function Card({ icon, title, description, image }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-blue-900 flex flex-col items-center text-center space-y-4">
        <div className='text-4xl'>{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {image && <img src={commercialrealestate.jpeg} alt={title} className="mt-4 rounded-lg" />}
    </div>
  )
}
