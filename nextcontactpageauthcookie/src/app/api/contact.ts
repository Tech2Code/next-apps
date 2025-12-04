import axios from "axios";
import { ContactType } from "../_types/Contacts";

const API_URL = "http://localhost:8000";

export const getContacts = async (userId: string) => {
    const res = await axios.get(`${API_URL}/contact?userid=${userId}`);
    return res.data;
};

export const getContactById = async (id: string) => {
    const res = await axios.get(`${API_URL}/contacts/${id}`);
    return res.data;
}

export const createContact = async (contact: ContactType) => {
    const res = await axios.post(`${API_URL}/contacts`, contact);
    return res.data;
}

export const updateContact = async (id: string, contact: ContactType) => {
    const res = await axios.put(`${API_URL}/contacts/${id}`, contact);
    return res.data;
}

export const deleteContact = async (id: string) => {
    const res = await axios.delete(`${API_URL}/contacts/${id}`);
    return res.data;
}