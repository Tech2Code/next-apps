'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import PopupBox from '../popup/PopupBox';

const AddImages = () => {

    const [preview, setPreview] = useState<string[]>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [previewImg, setPreviewImg] = useState<string>('');

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const formData = new FormData();
        Array.from(files).forEach(file => formData.append('images', file, file.name));

        try {
            const res = await fetch('/api/upload', { method: 'POST', body: formData })

            if (!res.ok) throw new Error('Upload failed');
            const data = await res.json();

            if (data.urls && data.urls.length > 0) {
                console.log(data.urls);
                setPreview(prev => [...data.urls, ...prev])
            } else {
                alert('Found duplicate image name. No new files uploaded.')
            }

        } catch (error) {
            console.error('Image upload failed:', error);
        }
    }

    const removeImage = async (index: number) => {
        const imageUrl = preview[index];

        try {
            const res = await fetch('/api/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUrl }),
            });

            if (!res.ok) throw new Error('Failed to delete image');

            // Remove from local preview after successful delete
            const updatedPreview = [...preview];
            updatedPreview.splice(index, 1);
            setPreview(updatedPreview);
        } catch (err) {
            console.error('Error deleting image:', err);
            alert('Failed to delete image. Please try again.');
        }
    };

    const handlePreviewImageClick = (imgUrl: string) => {
        setPreviewImg(imgUrl);
        setShowPopup(true);
    }

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                const data = await response.json();
                setPreview((data.urls || []).reverse());
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);


    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('hidden-scroll');
        } else {
            document.body.classList.remove('hidden-scroll');
        }
    }, [showPopup]);

    return (
        <>
            <div className="add-contnet-box add-images">
                <div className="add-images-header">
                    <span className="add-images-title">Add Images</span>
                    <span className="add-images-step">Step 1/3</span>
                </div>
                <div className="tri-box">
                    <div className="add-images-button-section">
                        <label className="add-images-button">
                            + Add Images
                            <input className="add-images-file-input" onChange={(event) => onFileChange(event)} type="file" accept="image/*" multiple />
                        </label>
                    </div>
                    {
                        preview.length > 0 ? (
                            <div className="images-grid-section">
                                <div className="images-grid">
                                    {
                                        preview && preview.map((imgurl, index) => {
                                            return (
                                                <div className="image-preview-tile" key={index}>
                                                    <Image width={100} height={100} className="image-preview-img"
                                                        src={imgurl}
                                                        loading="lazy"
                                                        decoding="async" 
                                                        data-nimg={index}
                                                        fetchPriority={'high'}
                                                        alt="kitchen preview" />
                                                    <div className="image-preview-overlay">
                                                        <div className="image-preview-icon" onClick={() => handlePreviewImageClick(imgurl)}>
                                                            <Image width={20} height={20} src="./preview-eye.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <button className="remove-image-btn" name='remove-image' type="button" aria-label="remove image"  onClick={() => removeImage(index)}><Image width={12} height={12} src="./round-cross.svg" alt="" /></button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) :
                            <div className="default-show">
                                <p className="text">
                                    Added imgaes will appear here
                                </p>
                            </div>
                    }
                </div>
                <PopupBox showPopup={showPopup} setShowPopup={setShowPopup} previewImg={previewImg} />
            </div>
        </>
    )
}

export default AddImages