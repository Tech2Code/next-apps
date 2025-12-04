// app/components/Navbar.jsx
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import { getSessionCookie } from '../_lib/session';

const Navbar = async () => {
    const session = await getSessionCookie();
    return (
        <nav className="p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-6">
                <Link href="/" className="text-xl font-semibold text-blue-600  hover:text-blue-800">ContactManager</Link>
            </div>
            {session ? (
                <div className="flex items-center gap-5">
                    <Link
                        href="/contact"
                        className="text-blue-600 hover:underline hover:text-blue-800"
                    >
                        Contacts
                    </Link>
                    <Link
                        href="/profile"
                        className="text-blue-600 hover:underline hover:text-blue-800"
                    >
                        Profile
                    </Link>
                    <LogoutBtn />
                </div>
            ) : (
                <div className="flex items-center gap-5">
                    <Link
                        href="/contact"
                        className="text-blue-600 hover:underline hover:text-blue-800"
                    >
                        Contacts
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 py-2 flex items-center justify-center  w-[100px] text-white bg-blue-500 hover:bg-blue-600 rounded"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="px-4 py-2 flex items-center justify-center  w-[100px] text-white bg-green-500 hover:bg-green-600 rounded"
                    >
                        Register
                    </Link>
                </div>
            )}
        </nav>

    )
};

export default Navbar;
