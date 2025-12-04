
import { loginAction } from '@/app/actions/auth'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-72px)] bg-gradient-to-br from-blue-50 to-indigo-200">
            <form
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
                action={loginAction}
                id="loginForm"
            >
                <h2 className="text-2xl font-bold text-center text-indigo-700">Login</h2>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        User ID
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="true"
                        required
                        className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        placeholder="Enter your user ID"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        placeholder="••••••••"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-lg bg-indigo-700 text-white font-bold hover:bg-indigo-800 transition cursor-pointer"
                >
                    Login
                </button>
                <div className="text-center">
                    <span className="text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-indigo-700 font-medium hover:underline"
                        >
                            Register here
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default LoginPage