
import './file-upload.css'
import AddImages from '../components/add-images/AddImages'
import AddChecklist from '../components/add-checklist/AddChecklist'
import AddRemark from '../components/add-remark/AddRemark'

const FileUpload = () => {
    return (
        <>
            <div className="tri-main-box">
                <AddImages />
                <AddChecklist />
                <AddRemark />
            </div>
        </>
    )
}

export default FileUpload