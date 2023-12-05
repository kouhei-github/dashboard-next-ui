import {TfiAlignJustify} from 'react-icons/tfi'
import React, {useContext} from 'react'
import {SideBarContext} from '@/contexts/sideBar'

export const Header = () => {
  const sidebarCtx = useContext(SideBarContext)

  return (
      <div className={"h-[10%] my-5 mr-3 flex items-center space-x-4 border border-[#B3B3B3] rounded-xl px-6"}>
        <div className={"cursor-pointer"}  onClick={() => sidebarCtx.setOpen(!sidebarCtx.open)}>
          <TfiAlignJustify size={30} color={"white"} />
        </div>
        <p className={"font-bold text-lg"}>Overview</p>
      </div>
  )
}
