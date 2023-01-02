import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const CourseList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Course List Page</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.ADD_COURSE, {
                state: {
                    title: "From course list page"
                }
            })}>
                Go To Add Course
            </button>
            <br/>
            <button onClick={() => navigate(ROUTES.ADD_TYPE, {
                state: {
                    title: "From course list page"
                }
            })}>
                Go To Add Type
            </button>
            <br/>
            <button onClick={() => navigate(ROUTES.TYPE_LIST, {
                state: {
                    title: "From course list page"
                }
            })}>
                Go To Type List
            </button>
            <br/>
            <button onClick={() => navigate(`${ROUTES.EDIT_COURSE}/id-dari-course-list`, {
                state: {
                    title: "From course list page"
                }
            })}>
                Go To Edit Course
            </button>
        </>
    )
}


export default CourseList;