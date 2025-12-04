'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const AddChecklist = () => {
    const [checklist, setChecklist] = useState<string[]>([]);
    const [inputRemark, setInputRemark] = useState<string>('');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddRemark = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        if (!inputRemark.trim()) return;

        if (editIndex !== null) {
            const updatedChecklist = [...checklist];
            updatedChecklist[editIndex] = inputRemark;
            setChecklist(updatedChecklist);
            setEditIndex(null);
            // return;
        } else {
            setChecklist([inputRemark, ...checklist]);
        }
        setInputRemark('');

    }

    const deleteRemark = (index: number) => {
        if (index === editIndex) {
            setEditIndex(null);
            setInputRemark('');
        }
        const updatedChecklist = [...checklist];
        updatedChecklist.splice(index, 1);

        // const updatedChecklist = checklist.filter((_, i) => i !== index);
        setChecklist(updatedChecklist);
    }

    const updateRemark = (index: number) => {
        inputRef.current?.focus();
        setInputRemark(checklist[index]);
        setEditIndex(index);
    }


    return (
        <div className="add-contnet-box add-checklist">
            <div className="add-images-header">
                <span className="add-images-title">Add QC Checklist</span>
                <span className="add-images-step">Step 2/3</span>
            </div>
            <div className="tri-box">
                <div className="checklist-header-section">
                    <div className="checklist-title">Checklist Points</div>
                    <form onSubmit={handleAddRemark} className="checklist-input-row">
                        <input
                            className="checklist-input"
                            type="text"
                            placeholder="Enter Here"
                            name="remark"
                            required
                            ref={inputRef}
                            value={inputRemark}
                            onChange={(e) => setInputRemark(e.target.value)}
                        />
                        <button className="checklist-add-btn" type="submit">+ Add</button>
                    </form>
                </div>
                {
                    checklist && checklist.length > 0 ? (
                        <div className="checklist-list-section">
                            <ul className="checklist-list">
                                {
                                    checklist && checklist.map((item, index) => (
                                        <li className="checklist-item-row" key={index}>
                                            <span className="checklist-label">{item}</span>
                                            <div className="checklist-actions-section">
                                                <button
                                                    onClick={() => deleteRemark(index)}
                                                    className="checklist-btn remove">
                                                    <Image width={12} height={12} src="./round-cross.svg" alt="" />
                                                </button>
                                                <button
                                                    onClick={() => updateRemark(index)}
                                                    className="checklist-btn save">
                                                    <Image width={12} height={12} src="./round-check.svg" alt="" />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) :
                    <div className="default-show">
                        <p className="text">
                            Add checklist points will be shown here
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default AddChecklist