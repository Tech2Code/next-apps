import { ReactNode } from "react"

export interface LoaderContextType {
    loading: boolean
    setLoading: (value: boolean) => void
}

export interface LoaderProviderProps {
    children: ReactNode
}