import React from 'react'
import './Popup.css'
import Image from 'next/image'

const PopupBox = ({ setShowPopup, showPopup, previewImg }: { setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, showPopup: boolean, previewImg: string }) => {
    return (
        <div className={`popupOverlay ${showPopup && 'active'}`} id="popupOverlay">
            <div className="popupContainer">
                <div className="imgPreview">
                    {
                        previewImg && <Image width={200} height={200} src={previewImg} alt="" />
                    }
                </div>
                <div className="cross" onClick={() => setShowPopup(false)}>
                    X
                </div>
            </div>
        </div>
    )
}

export default PopupBox