import { useNavigate } from 'react-router-dom'

const StandardDetails = ({ standard }) => {
    //const navigate = useNavigate();

    const handleEditClick = () => {
        //navigate(`/editstandard/${standard._id}`);
    }

    return (
        <div class="std-packages">
            <br />
            <img src={image} alt="" className='std-image' /> <br /><br />
            <h2 class="std-name">{standard.stPackageName}</h2>
            <h4 class="std-id">Package ID : {standard.stPackageId}</h4>
            <p class="std-price">LKR {standard.stPackagePrice}</p>
            <p class="std-description">{standard.stPackageDescription}</p>
            <p><button class="std-edit-btn">Edit</button></p>
        </div>
    )
}

export default StandardDetails