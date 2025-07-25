import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();