'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type CardDetail = {
    remark: string;
    image: string[];
    dateTime: string;
};

const AddRemark = () => {
    const [preview, setPreview] = useState<string[]>([]);
    const [inputRemark, setInputRemark] = useState<string>('');
    const [showCardDtls, setShowCardDtls] = useState<CardDetail[]>([]);


    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const imgObjUrls = Array.from(files).map(file => URL.createObjectURL(file));
            setPreview((prev) => [...prev, ...imgObjUrls]);
        }
    }

    const newCard: CardDetail = {
        remark: inputRemark,
        image: preview,
        dateTime: new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }),
    };

    const handleAddRemark = () => (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        if (!inputRemark.trim()) return;

        setShowCardDtls([newCard, ...showCardDtls]);

        setInputRemark('');
        setPreview([]);
    }

    const removeImagePreview = (cardIndex: number, imgIndex: number) => {

        const updatedCard = [...showCardDtls];
        const selectedCard = updatedCard[cardIndex];

        const updatedPreview = selectedCard.image.filter((_, i) => i !== imgIndex);

        updatedCard[cardIndex] = { ...selectedCard, image: updatedPreview };
        setShowCardDtls(updatedCard);
    }

    const deleteCard = (index: number) => {
        const updatedCardDetails = showCardDtls.filter((_, i) => i !== index);
        setShowCardDtls(updatedCardDetails);
    }

    return (
        <div className="add-contnet-box add-remark">
            <div className="add-images-header">
                <span className="add-images-title">Add Remark</span>
                <span className="add-images-step">Step 3/3</span>
            </div>
            <div className="tri-box">
                <div className="checklist-header-section">
                    <form onSubmit={handleAddRemark()} className="checklist-input-row">
                        <div className="input-box">
                            <input
                                className="checklist-input"
                                type="text"
                                placeholder="Enter Here"
                                required
                                value={inputRemark}
                                onChange={(e) => setInputRemark(e.target.value)}
                            />
                            <label className="remark-upload-label" title="Upload">
                                {
                                    preview && preview.length > 0 && (
                                        <span style={{color:'0f00ff', fontSize:'10px'}}>{preview.length} {preview.length > 1 ? 'images' : 'image'} selected</span>                                        
                                    )
                                }
                                <input className="remark-upload-input" type="file" accept="image/*" multiple onChange={(e) => onFileChange(e)} />
                                <Image width={18} height={18} className="remark-upload-icon" src="./upload.svg" alt=""  />
                            </label>
                        </div>
                        <button type="submit" className="checklist-add-btn">+ Add</button>
                    </form>
                </div>
                {
                    showCardDtls.length > 0 ? (
                        <div className="remark-list-section">
                            {
                                showCardDtls && showCardDtls.map((item, cardIndex) => (
                                    <div className="remark-card" key={cardIndex}>
                                        <p className="remark-author">Nitin Sharma</p>
                                        <span className="remark-text">
                                            {item.remark}
                                        </span>
                                        {
                                            item.image.length > 0 && (
                                                <div className="remark-image-list">
                                                    {
                                                        item.image && item.image.map((item, imgIndex) => (
                                                            <div className="remark-image-thumb" key={imgIndex}>
                                                                <Image width={48} height={48} className="img-preview" src={item}
                                                                    alt="remark image" />
                                                                <button className="remark-remove-btn" onClick={() => removeImagePreview(cardIndex, imgIndex)}><Image width={12} height={12} src="./round-cross.svg" alt="" /></button>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                        <span className="remark-date">{item.dateTime}</span>
                                        <span className="delete-remark" onClick={() => deleteCard(cardIndex)}>Delete</span>
                                    </div>
                                ))
                            }
                        </div>
                    ) :
                        <div className="default-show">
                            <p className="text">
                                Add Remark will be shown here
                            </p>
                        </div>
                }
            </div>
        </div>
    )
}

export default AddRemark