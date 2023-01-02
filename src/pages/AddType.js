import {ROUTES} from "../constants";
import {useNavigate} from "react-router-dom";

const AddType = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>Add Type Page</h3>
            <p>Params: Contoh params</p>
            <button onClick={() => navigate(ROUTES.TYPE_LIST, {
                state: {
                    title: "From add type page"
                }
            })}>
                Go To Type List
            </button>
        </>
    )
}

export default AddType;