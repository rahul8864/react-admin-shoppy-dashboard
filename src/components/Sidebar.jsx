import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    // const activeMenu = true;
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
    // pb-2.5 -> pb-4
    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-white text-md m-2"
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2" 
  return (
    <div className='h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto'>
        {
            activeMenu && (
                <>
                    <div className="flex items-center justify-between">
                        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <SiShopware />
                            <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content="Close" position="BottomCenter">
                            <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden' onClick={() => setActiveMenu((prev) => !prev)}>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {links?.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {console.log(item)}
                                {item.links?.map((link) => (
                                    <NavLink to={link.name === 'dashboard' ? "/" : `/${link.name}`} key={link.name} className={({ isActive }) => isActive ? activeLink : normalLink} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}>
                                        {link.icon}
                                        <span className='capitalize'>{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Sidebar