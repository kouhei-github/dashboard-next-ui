"use client"
import Image from 'next/image'
import {Menu} from '@/components/menu'
import {IoMdHelp} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import Link from 'next/link'

type Props = {
  logoImage: string
  adminName: string
  profileImage: string
  name: string
  info: string
}

export const Sidebar = (props: Props) => {

  return (
      <div className={"w-[25%] border-r border-[#B3B3B3] h-[95vh] px-10 pt-7"}>
        <div className={"flex items-center space-x-4 mb-10"}>
          <Image src={props.logoImage} width={60} height={60} alt={"ロゴ"} className={"object-cover rounded-full"} />
          <p className={" font-bold text-lg"}>{props.adminName}</p>
        </div>

        <div className={"flex items-center space-x-4 mb-8"}>
          <Image src={props.profileImage} width={50} height={50} alt={"ロゴ"} className={"object-cover rounded-full"} />
          <div className={"text-left "}>
            <p className={""}>{props.name}</p>
            <p className={"text-[#5E5E5E] text-[13px]"}>{props.info}</p>
          </div>
        </div>

        <div className={"text-[#8F8F8F] h-[60vh] overflow-y-scroll"}>
          <Menu />
        </div>

        <div className={"h-[10vh] text-[#8F8F8F]"}>
          <Link href={"/logout"} className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer`}>
            <IoMdHelp size={25} color={"white"} />
            <p className={""}>Help & Information</p>
          </Link>

          <Link href={"/help"} className={`flex items-center space-x-3 py-4 px-4 rounded-2xl cursor-pointer`}>
            <FiLogOut size={25} color={"white"} />
            <p className={""}>Log Out</p>
          </Link>
        </div>
      </div>
  )
}
