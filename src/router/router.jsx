import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx"
import Video from "../Pages/VIdeo/Video.jsx"
import App from "../App";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/video/:catagoryId/:videoId',
                element:<Video/>
            }
        ]
    }
])
export default router