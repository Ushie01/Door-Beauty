import { useRouter } from "next/router";
import mockdata from "@/src/client/components/Auth/Admin/MOCK_DATA.json";
import Headerdash from "@/src/client/components/Auth/Admin/headerdash";
import Navbar from "@/src/client/components/Auth/Admin/navbar";

const RowDetail = () => {
  const router = useRouter();
  const serial_number = router.query.serial_number as string | undefined;

  if (serial_number === undefined) {
    return <p>Serial number not provided</p>;
  }

  const rowData = mockdata.find(
    (row) => row.serial_number === Number(serial_number)
  );

  if (!rowData) {
    return <p>Data not found</p>;
  }

  return (
    <div>
      <Headerdash />
      <Navbar />
      <div className="pt-44 pl-72 ">
        <h1 className="font-bold text-2xl  ">View User Profile</h1>
        <section className=" bg-gray-200 mt-8 w-[70rem] grid grid-cols-3 gap-24 p-6 pl-28 rounded-lg  ">
          <div>
            <h2 className="font-bold text-xl">Email</h2>
            <h3>{rowData.email}</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">Phone</h2>
            <h3>{rowData.contact}</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">Address</h2>
            <h3>XXXXXXXX</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">City</h2>
            <h3>London</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">State</h2>
            <h3>Cali</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">ZIP Code</h2>
            <h3>XXXXXXXX</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">Apt Suite</h2>
            <h3>XXXXXXXX</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">Payment Method</h2>
            <h3>Card</h3>
          </div>
          <div>
            <h2 className="font-bold text-xl">Card Number</h2>
            <h3>XXXXXXXXXXXX</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RowDetail;
