import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";


const Headerdash = () => {
  const[profileState, setProfileState] = useState<boolean>(false);
  const showProfile = ()=>{
      setProfileState(!profileState)
  }
  const closeProfile = ()=>{
    if (profileState===true) {
      setProfileState(false)
    }
    
  }
  


  return (
    <div>
      <div onClick={closeProfile}  className=" bg-orange-400 h-28 w-full flex fixed z-50 ">
       <div className=" pl-6 pt-6">
          <Image src="/namelogo.png" alt="logo" width={400} height={300} />
        </div> 
        <div className="ml-lm pt-9 ">
          <Image
            src="/icons8-notification-50.png"
            alt="notification"
            width={30}
            height={10}
          />
        </div>
        <div className="pt-8 ml-4">
          <Image
          onClick={showProfile}
            className=" rounded-full "
            src="/dp.jpg"
            alt="notification"
            width={40}
            height={20}
          />
        </div>
        <h5 className="ml-4 pt-9">Hi, Lizzie Drummond</h5>
       { profileState && <section className=" w-32 h-16 mt-20 bg-white " >
          <Link href='/Admin/viewprofile'><h3>profile</h3></Link>
      </section>} 
      </div>
    </div>
  );
};

export default Headerdash;
