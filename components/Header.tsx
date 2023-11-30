import {TfiAlignJustify} from 'react-icons/tfi'

export const Header = () => {
  return (
      <div className={"h-[10%] my-5 mr-3 flex items-center space-x-4 border border-[#B3B3B3] rounded-xl px-6"}>
        <div className={"cursor-pointer"}>
          <TfiAlignJustify size={30} color={"white"} />
        </div>
        <p className={"font-bold text-lg"}>Overview</p>
      </div>
  )
}
