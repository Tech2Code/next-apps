import React from 'react'
import { ContactType } from '../_types/Contacts'
import Link from 'next/link'
import { FiEdit, FiUser } from 'react-icons/fi'
import DeleteBtn from './DeleteBtn'

const ContactList = ({contactDetails}: {contactDetails:ContactType[]}) => {
    return (
        <div className="flex flex-col mt-5">
            <p className="text-gray-500 font-bold ">Total contacts: {contactDetails.length}</p>
            <div className="flex flex-col mt-5">
                {contactDetails.map((contact: any) => (
                    <div key={contact.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                                <FiUser className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold">{contact.name}</p>
                                <p className="text-gray-500"><span className='font-semibold'>Email: </span>{contact.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={`contact/edit/${contact.id}`} className= "bg-white border border-blue-600 hover:bg-gray-100 text-gray-600 py-1 px-3 rounded cursor-pointer flex items-center justify-center w-[100px] gap-1">
                                <FiEdit />
                                Edit
                            </Link>
                            <DeleteBtn contact={contact} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactList