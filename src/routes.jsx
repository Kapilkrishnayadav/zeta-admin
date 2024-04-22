import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { BookParking, Vendors, ParkingList, Customers } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Book Parking",
        path: "/bookParking",
        element: <BookParking />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Vendors",
        path: "/vendors",
        element: <Vendors />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Parking List",
        path: "/parkingList",
        element: <ParkingList />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Customer",
        path: "/customer",
        element: <Customers />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
