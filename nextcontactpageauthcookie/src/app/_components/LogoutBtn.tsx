"use client"

import { logoutAction } from '../actions/auth';
import { useLoader } from '../context/LoaderContext';

const LogoutBtn = () => {
    const { setLoading } = useLoader()

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logoutAction();
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded cursor-pointer"
            onClick={() => handleLogout()}
        >
            Logout
        </button>
    )
}

export default LogoutBtn