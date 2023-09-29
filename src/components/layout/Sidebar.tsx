import React from 'react'
import SidebarButton from '../ui/SidebarButton'

const Sidebar = () => {
    return (
        <div className="w-48 min-h-fit pl-4">
            <SidebarButton link={''} label={'Historic Ascents'}/>
            <SidebarButton link={'/ascents'} label={'All Ascents'}/>
            <SidebarButton link={'/climbs'} label={'Climbs'}/>
            <SidebarButton link={'/climbers'} label={'Climbers'}/>
            <SidebarButton link={'/create'} label={'Add New'}/>
        </div>
    )
}

export default Sidebar