import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const AddCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Add Course Page</h3>
            <p>Params: Contoh params</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "From add course page"
                }
            })}>
                Go To Course List
            </button>
        </>
    )
}

export default AddCourse;