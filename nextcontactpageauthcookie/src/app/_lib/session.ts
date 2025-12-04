import { cookies } from "next/headers";
import { UserType } from "../_types/User";

// set session cokkie
export const setSessionCookie = async (user: UserType) => {
    (await cookies()).set("session", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
};

// get session cookie
export const getSessionCookie = async (): Promise<UserType | null> => {
    const session = (await cookies()).get("session");
    if (!session) return null;
    const user: UserType = JSON.parse(session.value);
    return user;
};

// delete session cookie
export const deleteSessionCookie = async () => {
    const cokkieStore = await cookies();
    cokkieStore.delete("session");
};