import {ROUTES} from "../constants";
import {Link} from "react-router-dom";

const menu = [
    {path: ROUTES.COURSE_LIST, text: "Course List"},
    {path: ROUTES.TYPE_LIST, text: "Type list"},
    {path: ROUTES.ADD_COURSE, text: "Add Course"},
    {path: ROUTES.ADD_TYPE, text: "Add Type"},
    {path: `${ROUTES.EDIT_COURSE}/id-dari-navbar`, text: "Edit Course"},
];

const Navbar = () => (
    <nav>
        {menu.map((item) => (
            <Link to={item.path}
                  style={{marginRight: 10}}
                  state={{
                      title: "Title from navbar"
                  }}
            >
                {item.text}
            </Link>
        ))}
    </nav>
)

export default Navbar;