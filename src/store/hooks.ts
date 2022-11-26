import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {RootState,AppDispacth} from './store'


export const useAppDispatch : ()=>AppDispacth = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector