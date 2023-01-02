import {ROUTES} from "../constants";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const EditCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    let query = new URLSearchParams(location.search);
    let name = query.get('name');
    return (
        <>
            <h3>Edit Course Page</h3>
            <p>Params: {location?.state?.title}</p>
            <p>Path variable: {params?.courseId}</p>
            <p>Query params: {name}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "From edit course page"
                }
            })}>
                Go To Course List
            </button>
        </>
    )
}

export default EditCourse;