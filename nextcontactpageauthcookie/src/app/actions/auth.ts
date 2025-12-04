"use server"

import axios from "axios"
import { redirect } from "next/navigation"
import { UserType } from "../_types/User"
import { deleteSessionCookie, setSessionCookie } from "../_lib/session"

const API_URL = 'http://localhost:8000'

export const loginAction = async (formData: FormData) => {
    // console.log(formData)
    try {
        // const respone = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`)
        const respone = await axios.get(`${API_URL}/users`, {
            params: {
                email: formData.get("email"),
                password: formData.get("password")
            }
        })
        const user: UserType = respone.data[0]
        console.log(user)
        if (!user) throw new Error("Invalid credentials")
        // set user in the cookies
        await setSessionCookie({
            id: user.id,
            email: user.email,
            name: user.name
        })
    } catch (error) {
        throw new Error("Failed to login")
    }
    redirect("/contact");
}

export const logoutAction = async () => {
    await deleteSessionCookie();
    redirect("/login");
}