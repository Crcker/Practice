import Auth from "./pages/Auth";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";
import Registration from "./pages/Registration";
import EventDescribe from "./pages/EventDescribe";
import UserDescribe from "./pages/UserDescribe";

import { REGISTRATION_ROUTE, LOGIN_ROUTE, EVENTS_ROUTE, CREATE_EVENT_ROUTE, EVENT_DESCRIBE_ROUTE, USER_DESCRIBE_ROUTE } from "./Utils/Consts";

export const authRoutes = [  

    {
        path: EVENTS_ROUTE,
        Component: Events
    },
    {
        path: CREATE_EVENT_ROUTE,
        Component: CreateEvent
    },
    {
        path: EVENT_DESCRIBE_ROUTE,
        Component: EventDescribe
    },
    {
        path: USER_DESCRIBE_ROUTE,
        Component: UserDescribe
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }

]