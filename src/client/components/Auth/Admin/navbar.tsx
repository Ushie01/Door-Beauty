import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className=" w-56 text-sm font-semibold font-mont ">
        <ul className=" bg-orange-50 flex flex-col space-y-5 pt-4">
          <Link href="/Admin">
            <li className="flex space-x-2">
              <Image
                className=""
                src="/house_FILL0_wght400_GRAD0_opsz24.png"
                alt="dashicon"
                width={25}
                height={20}
              />
              <h5 className="pt-1">DASHBOARD</h5>
            </li>
          </Link>
          <hr className=" border border-orange-500"></hr>
         <Link href='/Admin/users' ><li className="flex space-x-2">
            <Image
              className=""
              src="/group_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">USERS</h5>
          </li></Link> 
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/person_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">VENDOR</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/airport_shuttle_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">DRIVERS</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/storefront_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">STORE MANAGEMENT</h5>
          </li>
          <hr className="border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/shopping_bag_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">ORDER MANAGEMENT</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/shopping_basket_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">PRODUCT MANAGEMENT</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/credit_card_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">PAY LOGS</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/database_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">CATEGORY MANAGEMENT</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
          <li className="flex space-x-2">
            <Image
              className=""
              src="/crowdsource_FILL0_wght400_GRAD0_opsz24.png"
              alt="dashicon"
              width={25}
              height={20}
            />
            <h5 className="pt-1">BRANDS</h5>
          </li>
          <hr className=" border border-orange-500"></hr>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
