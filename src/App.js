import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {ROUTES} from "./constants"
import AddType from "./pages/AddType";
import AddCourse from "./pages/AddCourse";
import TypeList from "./pages/TypeList";
import CourseList from "./pages/CourseList";
import Navbar from "./components/Navbar";
import {Routes, Route, Outlet, Navigate} from "react-router-dom";
import EditCourse from "./pages/EditCourse";

const CourseWrapper = () => (
    <>
        <h1>Course Page</h1>
        <Outlet/>
    </>
)

const TypeWrapper = () => (
    <>
        <h1>Type Page</h1>
        <Outlet/>
    </>
)

const ProtectedRoutes = ({isLoggedIn}) => {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.LOGIN} replace={true}/>
    }

    return (
        <>
            <Navbar/>
            <hr/>
            <h1>Dashboard</h1>
            <Outlet/>
        </>
    )
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    return (
        <div className="App">
            <Routes>
                <Route path={ROUTES.LOGIN} element={<h1>Login Page</h1>} index={true}/>
                <Route path={ROUTES.DASHBOARD} element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
                    <Route path={ROUTES.COURSE_LIST} element={<CourseWrapper/>}>
                        <Route element={<CourseList/>} index={true}></Route>
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse/>}></Route>
                        <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse/>}></Route>
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<TypeWrapper/>}>
                        <Route element={<TypeList/>} index={true}></Route>
                        <Route path={ROUTES.ADD_TYPE} element={<AddCourse/>}></Route>
                    </Route>
                </Route>
                <Route path={"*"} element={<h3>Page not found</h3>}></Route>
            </Routes>
        </div>
    );
}

export default App;
