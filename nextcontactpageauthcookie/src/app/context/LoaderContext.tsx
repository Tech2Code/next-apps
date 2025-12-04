'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { LoaderContextType, LoaderProviderProps } from '../_types/Loader'



const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const useLoader = (): LoaderContextType => {
    const context = useContext(LoaderContext)
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider')
    }
    return context
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
            {loading && (
                <div className="fixed inset-0 z-50 bg-black/70 bg-opacity-40 flex flex-col items-center justify-center backdrop-blur-sm">
                    <div className="flex items-center justify-center">
                        <div className="relative w-20 h-20">
                            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <svg className="animate-spin h-40 w-40 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path
                                        className="opacity-90"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </LoaderContext.Provider>
    )
}
