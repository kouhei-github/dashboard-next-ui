"use client"

import {useMemo, useState} from 'react'
import {IoHomeOutline, IoSettingsOutline} from 'react-icons/io5'
import {IconType} from 'react-icons'
import {GrProjects} from 'react-icons/gr'
import {FaTasks} from 'react-icons/fa'
import {GiExpense, GiProgression, GiTeamIdea} from 'react-icons/gi'
import {SiAmazonredshift, SiPivotaltracker, SiSimpleanalytics} from 'react-icons/si'
import {MdCancelPresentation} from 'react-icons/md'
import {BsBarChartSteps} from 'react-icons/bs'

type IMenu = {
  name: string
  component: IconType
}

type Header = "overview" | "organization" | "Your Teams"

export const Menu = () => {
  const [select, setIsSelect] = useState<{position: Header, index: number}>({position: "overview", index: 0})

  const changeSideBar = (position: string, idx: number) => {
    setIsSelect({...select, position: position as Header, index: idx})
  }

  const menus = useMemo(() => {
    return {
      overview: [
          {name: "Home", component: <IoHomeOutline  size={25} color={"white"} />},
          {name: "Projects", component: <GrProjects  size={25} color={"white"} />},
          {name: "Tasks", component: <FaTasks  size={25} color={"white"} />},
          {name: "Team", component: <GiTeamIdea  size={25} color={"white"} />},
          {name: "Tracker", component: <SiPivotaltracker  size={25} color={"white"} />},
          {name: "Projects", component: <GrProjects  size={25} color={"white"} />},
        ],
      organization: [
        {name: "Analytics", component: <SiSimpleanalytics  size={25} color={"white"} />},
        {name: "Perks", component: <MdCancelPresentation  size={25} color={"white"} />},
        {name: "Expenses", component: <GiExpense  size={25} color={"white"} />},
        {name: "Settings", component: <IoSettingsOutline  size={25} color={"white"} />},
      ],
      yourTeam: [
        {name: "Next UI", component: <BsBarChartSteps  size={25} color={"white"} />},
        {name: "Tailwind Variants", component: <SiAmazonredshift  size={25} color={"white"} />},
        {name: "Next UI Pro", component: <GiProgression  size={25} color={"white"} />},
      ]
    }
  }, [])


  return (
      <>
        <h2 className={"text-[#5E5E5E] mb-5"}>Overview</h2>
        {menus.overview.map((menu, idx) => (
            <div
                onClick={() => changeSideBar("overview", idx)}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select.index === idx && select.position === "overview" ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </div>
        ))}
        <h2 className={"text-[#5E5E5E] my-5"}>Organization</h2>
        {menus.organization.map((menu, idx) => (
            <div
                onClick={() => changeSideBar("organization", idx)}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select.index === idx && select.position === "organization" ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </div>
        ))}
        <h2 className={"text-[#5E5E5E] my-5"}>Your Teams</h2>
        {menus.yourTeam.map((menu, idx) => (
            <div
                onClick={() => changeSideBar("Your Teams", idx)}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select.index === idx && select.position === "Your Teams" ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </div>
        ))}
      </>
  )
}
