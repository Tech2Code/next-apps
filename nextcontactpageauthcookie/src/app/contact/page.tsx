
import Image from "next/image";
import { getSessionCookie } from "../_lib/session";
import { getContacts } from "../api/contact";
import Link from "next/link";
import { FaUserCircle } from 'react-icons/fa'
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSessionCookie();

  if (!user) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Image
        src="/login.png"
        alt="Login required illustration"
        width={220}
        height={130}
        className="mb-6 rounded shadow-md"
        priority
      />
      <h2 className="text-2xl font-semibold mb-3">Please <Link href="/login" className="text-blue-600 hover:underline hover:text-blue-800">login</Link> to view your account</h2>
      <p className="text-gray-600 text-center">
        You must be logged in to access your account details and manage your contacts.
      </p>
    </div>
  )

  const contactDetails = await getContacts(user?.id);

  console.log(contactDetails)

  if (contactDetails.length <= 0) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-semibold mb-3">Please <Link href="/new" className="text-blue-600 hover:underline hover:text-blue-800">add a contact</Link> to your contact list</h2>
    </div>
  )


  return (
    <div className="flex flex-col p-5">
      <div className="flex align-center justify-between">
        <p className="text-black font-bold ">Add contact</p>
        <Link href="/new" className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded cursor-pointer">Add a contact</Link>
      </div>
      <ContactList contactDetails={contactDetails}/>
    </div>
  )
}

export default ContactPage