'use client'
import EmployeeList from "./components/EmployeeList";
import AddEmployeeBtn from "./components/AddEmployeeBtn";
import SearchBox from "./components/SearchBox";
import 'aos/dist/aos.css';
import AOS from "aos";
import { use, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto">
        <h3 className="text-center  mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with Next Context API and Hooks
        </h3>
        {/* <SearchBox /> */}
        <div className="flex items-center mt-10 mb-10">
          <div className="flex-grow text-left px-4 py-2 m-2">
            <h5 className="text-gray-900 font-bold text-xl">Employee Listing</h5>
          </div>
          <div className="flex-grow text-right px-4 py-2 m-2">
            <AddEmployeeBtn />
          </div>
        </div>
        <EmployeeList />
      </div>
    </div>
  );
}
