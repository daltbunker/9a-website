import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SidebarButtonProps {
  link: string
  label: string
}

const SidebarButton = ({ link, label }: SidebarButtonProps) => {
  let navigate = useNavigate()
  const routeChange = () => {
    navigate(link)
  }

  return (
    <button className="text-gray-500 hover:text-blue-800 hover:underline font-bold h-10 block" onClick={routeChange}>
      {label}
    </button>
  )
}

export default SidebarButton