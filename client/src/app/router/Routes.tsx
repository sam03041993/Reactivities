import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feature/activities/forms/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "activities", element: <ActivityDashboard /> },
            { path: "activities/:id", element: <ActivityDetails /> },
            { path: "manage/:id", element: <ActivityForm key="create" /> },
            { path: "createActivity", element: <ActivityForm /> }
        ]
    }
]);