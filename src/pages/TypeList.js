import {ROUTES} from "../constants";
import {useNavigate} from "react-router-dom";

const TypeList = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>Add Type List</h3>
            <p>Params: Contoh params</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "From type list"
                }
            })}>
                Go To Course List
            </button>
        </>
    )
}


export default TypeList;