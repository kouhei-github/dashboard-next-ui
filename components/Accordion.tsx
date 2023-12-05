import React, {ReactNode, useContext} from 'react'
import type { NextPage } from 'next'
import {SideBarContext} from '@/contexts/sideBar'

type IAccordion = {
  children: ReactNode
}

const Accordion: NextPage<IAccordion> = (props): JSX.Element => {
  const sidebarCtx = useContext(SideBarContext)
  return (
    <div className={`${sidebarCtx.open ? "bg-opacity-50 duration-1000" : "duration-1000"}`}>
      <div className={`relative`}>
        <div className={`w-full absolute ease-in-out ${sidebarCtx.open ? "duration-[600ms]  left-1/2 transform -translate-x-1/2" : "transform -left-[150%] -translate-x-100 duration-[800ms]"}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
