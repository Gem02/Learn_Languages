import MenuContext from './MenuBarContext'
import {useContext} from 'react'


export const useMenuBar = () =>{
   return useContext(MenuContext)
}