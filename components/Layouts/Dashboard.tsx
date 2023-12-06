"use client"
import {Sidebar} from '@/components/Sidebar'
import {Header} from '@/components/Header'
import {SideBarContext, useSideBarContext} from '@/contexts/sideBar'

export default function Dashboard({children}: { children: React.ReactNode }) {
  const sidebarCtx = useSideBarContext()

  return (
    <div className={"w-full h-[100vh] bg-black text-white md:p-6 pr-6 py-6"}>
      <div className={"flex h-full space-x-4 md:border border-y border-r rounded-xl"}>
        <SideBarContext.Provider value={sidebarCtx} >
          <Sidebar adminName={"Kohei Dashboard"} logoImage={"/images/logo.webp"} profileImage={"/images/my-profile.webp"} name={"Kohei"} info={"developper"} />
        </SideBarContext.Provider>
        <div className={`w-[75%] space-y-4 ${sidebarCtx.open ? "w-[75%]" : "w-full"}`}>
          <SideBarContext.Provider value={sidebarCtx} >
            <Header />
          </SideBarContext.Provider>
          <div className={"h-[85%] p-5 md:p-8 border border-[#B3B3B3] hidden-scrollbar overflow-y-scroll rounded-xl my-5 mr-3 "}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
