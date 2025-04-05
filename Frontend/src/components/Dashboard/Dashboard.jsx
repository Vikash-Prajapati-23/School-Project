// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   LogOut,
//   Menu,
//   LayoutGrid,
//   BookOpen,
//   Medal,
//   CalendarDays,
//   Megaphone,
// } from "lucide-react";
// import { Button } from "../ui/button";

// const Dashboard = () => {
//   const [openNav, setOpenNav] = useState(true);

//   // const handleSidenav = () => {
//   //   setOpenNav(false);
//   // };

//   return (
//     <aside className={`h-screen flex text-white`}>
//       <div
//         className={`space-y-5 w-56 p-5 justify-center bg-blue-500 transform transition-transform duration-300 ease-in-out ${
//           openNav ? "translate-x-0" : "-translate-x-full"
//         } md:block`}
//       >
//         <div className="flex justify-center">
//           <Avatar className="h-[100px] w-[100px]">
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>User Image</AvatarFallback>
//           </Avatar>
//         </div>
//         <h2 className="text-2xl font-bold border-red-500 border-b-2">
//           User Name
//         </h2>
//         <ul className="space-y-2">
//           <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
//             <LayoutGrid /> All Classes
//           </li>
//           <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
//             <BookOpen /> Courses
//           </li>
//           <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
//             <Medal /> Extracurriculars
//           </li>
//           <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
//             <CalendarDays /> Events
//           </li>
//           <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
//             <Megaphone /> Announcements
//           </li>
//         </ul>
//         <Button className=" bg-red-500 hover:bg-red-600">
//           <LogOut />
//           <span>Logout</span>
//         </Button>
//       </div>
//       <div className={`p-5 ${
//           openNav ? "-translate-x-0" : "-translate-x-full"
//         }`}>
//         <Button
//           onClick={() => {
//             setOpenNav(!openNav);
//           }}
//           className="md:hidden"
//         >
//           <Menu />
//         </Button>
//       </div>
//     </aside>
//   );
// };

// export default Dashboard;


import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LogOut,
  Menu,
  LayoutGrid,
  BookOpen,
  Medal,
  CalendarDays,
  Megaphone,
} from "lucide-react";
import { Button } from "../ui/button";

const Dashboard = () => {
  const [openNav, setOpenNav] = useState(true);

  return (
    <aside className="h-screen flex text-white relative">
      <div
        className={`space-y-5 w-56 p-5 justify-center bg-blue-500 transform transition-transform duration-300 ease-in-out ${
          openNav ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div className="flex justify-center">
          <Avatar className="h-[100px] w-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User Image</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold border-red-500 border-b-2">
          User Name
        </h2>
        <ul className="space-y-2">
          <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
            <LayoutGrid /> All Classes
          </li>
          <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
            <BookOpen /> Courses
          </li>
          <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
            <Medal /> Extracurriculars
          </li>
          <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
            <CalendarDays /> Events
          </li>
          <li className="cursor-pointer font-semibold border-transparent border-b-[1px] hover:border-red-400 flex gap-2 w-full py-1">
            <Megaphone /> Announcements
          </li>
        </ul>
        <Button className="bg-red-500 hover:bg-red-600">
          <LogOut />
          <span>Logout</span>
        </Button>
      </div>

      <Button
        onClick={() => setOpenNav(!openNav)}
        className="absolute top-3 left-3 bg-gray-800 text-white p-2 rounded-md md:hidden"
      >
        <Menu />
      </Button>
    </aside>
  );
};

export default Dashboard;
