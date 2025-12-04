"use client"
import React from 'react'
import { ContactType } from '../_types/Contacts'
import { FiTrash2 } from 'react-icons/fi'
import { deleteContact } from '../api/contact'

interface DeleteButtonProps {
    contact?: ContactType
}

const DeleteBtn = async ({ contact }: DeleteButtonProps) => {
    return (
        <form  method='post'>
            <button
                type='submit' className="flex items-center justify-center gap-1 w-[100px] bg-red-600 border border-blue-600  hover:bg-red-700 text-white py-1 px-3 rounded cursor-pointer"
                onClick={(e) => {if(!confirm('Are you sure you want to delete this contact?')) e.preventDefault()}}
            >
                <FiTrash2 className='color-white' />
                Delete
            </button>
        </form>
    )
}

export default DeleteBtn