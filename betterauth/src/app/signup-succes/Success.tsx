import { redirect } from 'next/navigation';
import React from 'react'

const Success = ({userName}: {userName: string}) => {
    const handleGoToLogin = () => {
        redirect("/signin");
    };

    const handleGoToDashboard = () => {
        redirect("/dashboard");
    };
    return (
        <div className="signup-form">
            <h2>Signup Successful!</h2>
            <p>Welcome, {userName}! Your account has been created.</p>
            <button onClick={handleGoToLogin}>Login</button>
            {/* OR, if you want a dashboard button: */}
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
        </div>
    );
}

export default Success