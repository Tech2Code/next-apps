import React from 'react'
import { authClient } from '../lib/auth-client'

const Logout = () => {
    const handleSignOut = async () => {
        await authClient.signOut();
    }
    return (
        <button onClick={() => handleSignOut}>SignOut</button>
    )
}

export default Logout