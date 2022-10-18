import SidebarList from './SidebarList'
import sidebar from './DataSidebar'

function Sidebar() {
    return (
        <div className='sidebar'>

            {sidebar.map((location, i) => {
                return (
                <SidebarList key={i} whichLocation={location} />
                )
            })}
        </div>
    )
}

export default Sidebar;