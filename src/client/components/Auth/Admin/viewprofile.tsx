import Headerdash from "./headerdash";
import Navbar from "./navbar";
import Image from "next/image";

const Viewprofile = () => {
  return (
    <div>
      <Headerdash />
      <div className="flex  ">
        <Navbar />
        <div className="pl-96">
          <div className=" bg-gray-50 p-16 w-50rem mt-32 ">
            <h4 className=" text-3xl font-bold mb-7 " >Profile</h4>
            <div className="flex justify-center items-center mb-9">
            <Image
            className=" "
            src="/dp.jpg"
            alt="notification"
            width={400}
            height={400}
          />
            </div>
            <section className="flex justify-between" > <div>
              <h3 className=" font-bold " >NAME</h3>
              <h3>LIZZIE DRUMMOND</h3>
            </div>
            <div >
              <h3 className="font-bold">EMAIL</h3>
              <h3>charlestsmith888@gmail.com</h3>
            </div>
            <div>
              <h3 className="font-bold">PHONE NUMBER</h3>
              <h3>O8O88888888</h3>
            </div></section>
           
            <div className="bg-orange-300 text-center font-bold pt-1 text-black w-20 h-8 rounded-2xl mt-8 ">
              EDIT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewprofile;
