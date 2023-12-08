"use client"

import {useEffect, useMemo, useState} from 'react'
import {IoHomeOutline, IoSettingsOutline} from 'react-icons/io5'
import {IconType} from 'react-icons'
import {GrProjects} from 'react-icons/gr'
import {FaTasks} from 'react-icons/fa'
import {GiExpense, GiProgression, GiTeamIdea} from 'react-icons/gi'
import {SiAmazonredshift, SiPivotaltracker, SiSimpleanalytics} from 'react-icons/si'
import {MdCancelPresentation} from 'react-icons/md'
import {BsBarChartSteps} from 'react-icons/bs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Menu = () => {
  const [select, setIsSelect] = useState<string>("/")

  const pathname = usePathname()
  useEffect(() => {
    setIsSelect(pathname)
  }, [pathname])


  const menus = useMemo(() => {
    return {
      overview: [
          {name: "Home", href: "/",component: <IoHomeOutline  size={25} color={"white"} />},
          {name: "Projects", href: "/projects",component: <GrProjects  size={25} color={"white"} />},
          {name: "Tasks", href: "/tasks",component: <FaTasks  size={25} color={"white"} />},
          {name: "Team", href: "/team",component: <GiTeamIdea  size={25} color={"white"} />},
          {name: "Tracker", href: "/tracker",component: <SiPivotaltracker  size={25} color={"white"} />},
        ],
      organization: [
        {name: "Analytics", href: "/analytics",component: <SiSimpleanalytics  size={25} color={"white"} />},
        {name: "Perks", href: "/perks",component: <MdCancelPresentation  size={25} color={"white"} />},
        {name: "Expenses", href: "/expenses",component: <GiExpense  size={25} color={"white"} />},
        {name: "Settings", href: "/settings",component: <IoSettingsOutline  size={25} color={"white"} />},
      ],
      yourTeam: [
        {name: "Next UI", href: "/next-ui",component: <BsBarChartSteps  size={25} color={"white"} />},
        {name: "Tailwind Variants", href: "/tailwind",component: <SiAmazonredshift  size={25} color={"white"} />},
        {name: "Subscription", href: "/subscription",component: <GiProgression  size={25} color={"white"} />},
      ]
    }
  }, [])


  return (
      <>
        <h2 className={"text-[#5E5E5E] mb-5"}>Overview</h2>
        {menus.overview.map((menu, idx) => (
            <Link
                href={menu.href}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select === menu.href ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </Link>
        ))}
        <h2 className={"text-[#5E5E5E] my-5"}>Organization</h2>
        {menus.organization.map((menu, idx) => (
            <Link
                href={menu.href}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select === menu.href ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </Link>
        ))}
        <h2 className={"text-[#5E5E5E] my-5"}>Your Teams</h2>
        {menus.yourTeam.map((menu, idx) => (
            <Link
                href={menu.href}
                key={idx}
                className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer ${select === menu.href ? "bg-[#2B2B2E] text-white" : ""}`}
            >
              {menu.component}
              <p className={"text-lg"}>{menu.name}</p>
            </Link>
        ))}
      </>
  )
}
