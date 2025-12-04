'use client'

import React from 'react'
import { loginAction } from '../actions/auth'
import { useLoader } from '../context/LoaderContext'

interface LoginBtnProps {
  formId: string
}

const LoginBtn = ({ formId }: LoginBtnProps) => {
  const { setLoading } = useLoader()

  const handleLogin = async () => {
    const form = document.getElementById(formId) as HTMLFormElement | null
    if (!form) return
    const formData = new FormData(form)

    try {
      setLoading(true)
      await loginAction(formData)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="w-full py-2 px-4 rounded-lg bg-indigo-700 text-white font-bold hover:bg-indigo-800 transition cursor-pointer"
      onClick={handleLogin}
    >
      Login
    </button>
  )
}

export default LoginBtn
