import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage";
import Service from "../pages/medi-service/Service";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserDashboard/UserHome";
import Cart from "../pages/Dashboard/UserDashboard/Cart";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import AddProduct from "../pages/Dashboard/AdminDashboard/AddProduct";
import AllProducts from "../pages/Dashboard/AdminDashboard/AllProducts";
import UpdateProduct from "../pages/Dashboard/AdminDashboard/UpdateProduct";
import AdminRoute from "./AdminRoute";
import Review from "../pages/Dashboard/UserDashboard/Review";
import Paymennt from "../pages/Dashboard/UserDashboard/Paymennt";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";
import AllPayment from "../pages/Dashboard/AdminDashboard/AllPayment";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service',
                element: <Service></Service>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:  <ErrorPage />,
        children:[
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            }
            ,
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: 'payment',
                element: <Paymennt></Paymennt>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // admin Route
            {
                path:'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'allproduct',
                element: <AllProducts></AllProducts>
            },
            {
                path: 'updateproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params})=>fetch(`http://localhost:5000/medicine/${params.id}`)
            },
            {
                path: 'allpayment',
                element: <AdminRoute><AllPayment></AllPayment></AdminRoute>
            }

        ]
    }

])

