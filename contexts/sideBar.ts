import {createContext, useCallback, useState} from 'react'

type SideBarOpenContext = {
  open: boolean
  setOpen: (isOpen: boolean) => void
}

const defaultValue: SideBarOpenContext = {
  open: true,
  setOpen: () => {}
}

export const SideBarContext = createContext<SideBarOpenContext>(defaultValue)

export const useSideBarContext = (): SideBarOpenContext => {
  const [open, setSideBar] = useState<boolean>(true)

  const setOpen = useCallback((value: boolean) => {
    setSideBar(value)
  }, [])
  return {
    open,
    setOpen
  }
}
