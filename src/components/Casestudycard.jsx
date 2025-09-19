import React from 'react'

export default function Casestudycard({item}) {
    const { title, description, src } = item;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={src} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
