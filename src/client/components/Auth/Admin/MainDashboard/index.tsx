import React from "react";
import Image from "next/image";
import Card from "../components/card";
import Headerdash from "../components/headerdash";
import Navbar from "../components/navbar";
import Salescard from "../components/salescard";
import LineChart from "../components/linechart";

const Admin = () => {
  return (
    <div>
      <Headerdash />
      <div className="flex space-x-8 bg-gray-100 ">
        <Navbar />
        <div className="pl-72">
          <div className=" bg-gray-300 mt-32 pt-4 px-6 rounded-lg ">
            <div>
              <h2 className=" text-2xl font-bold ">Dashboard</h2>
              <section className="flex space-x-3">
                <div>
                  <Card title="Total Users" content="29" percent="100%" />
                </div>
                <div>
                  <Card title="Total Vendor" content="59" percent="100%" />
                </div>
                <div>
                  <Card title="Total Drivers" content="13" percent="100%" />
                </div>
                <div>
                  <Card title="Total Commision" content="$500" percent="100%" />
                </div>
              </section>
            </div>
            <section className=" flex justify-between px-12 mt-5">
              <div>
                <h2 className=" font-bold text-3xl mb-4 ">Sales</h2>
                <section className="flex flex-col space-y-4">
                  <div>
                    <div className="flex space-x-12 mb-2">
                      <h3>Hair</h3>
                      <h1 className=" bg-white text-sm text-center p-1 w-9 rounded-full ">
                        0.21
                      </h1>
                    </div>
                    <div className="flex w-72 ">
                      <div className=" w-56 h-3 p-1 rounded-l-lg bg-orange-400 "></div>
                      <div className="w-16 rounded-r-lg p-1 bg-yellow-100 "></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-12 mb-2">
                      <h3>Hair</h3>
                      <h1 className=" bg-white text-sm text-center p-1 w-9 rounded-full ">
                        0.21
                      </h1>
                    </div>
                    <div className="flex w-72 ">
                      <div className=" w-56 h-3 p-1 rounded-l-lg bg-orange-400 "></div>
                      <div className="w-16 rounded-r-lg p-1 bg-yellow-100 "></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-12 mb-2">
                      <h3>Hair</h3>
                      <h1 className=" bg-white text-sm text-center p-1 w-9 rounded-full ">
                        0.21
                      </h1>
                    </div>
                    <div className="flex w-72 ">
                      <div className=" w-56 h-3 p-1 rounded-l-lg bg-orange-400 "></div>
                      <div className="w-16 rounded-r-lg p-1 bg-yellow-100 "></div>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <div>
                  <Salescard
                    title="Average Sales"
                    content="Month"
                    percent="100%"
                  />
                </div>
                <div>
                  <Salescard
                    title="Average Sales"
                    content="Year"
                    percent="100%"
                  />
                      <div  className=" bg-white mt-4 w-96 h-52 p-8 rounded-lg flex flex-col space-y-4 ">
                        <h2  className=" font-bold uppercase text-2xl ">Sales</h2>
                        <h2 className="font-semibold text-orange-400 text-6xl">$0</h2>
                </div>
                </div>
              </div>
            </section>
            <section className="mt-12">
              <h4 className="font-bold mb-4 text-3xl ">
                NEW QUERIES FOR DELIVERIES
              </h4>
             {/* <LineChart/> */}
            </section>
            <section className="mt-6">
              <h4 className=" font-bold mb-4 text-3xl ">
                NEW QUERIES FOR VENDORS
              </h4>
              {/* <LineChart/> */}
            </section>
            <section className=" mb-4 mt-6">
              <h4 className=" font-bold text-3xl ">NEW QUERIES FOR DRIVERS</h4>
             {/* <LineChart/> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
