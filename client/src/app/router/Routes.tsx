import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feature/activities/forms/ActivityForm";
import ActivityDetailPage from "../../feature/activities/details/ActivityDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "activities", element: <ActivityDashboard /> },
            { path: "activities/:id", element: <ActivityDetailPage /> },
            { path: "manage/:id", element: <ActivityForm key="create" /> },
            { path: "createActivity", element: <ActivityForm /> }
        ]
    }
]);