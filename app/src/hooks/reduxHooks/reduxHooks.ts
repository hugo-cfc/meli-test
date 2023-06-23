/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { RootState, AppDispatch } from "@/app/redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
