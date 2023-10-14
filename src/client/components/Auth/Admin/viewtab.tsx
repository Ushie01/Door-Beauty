import React from "react";
import Link from "next/link";




const Viewtab = ({ rowId }: { rowId: number }) => {
    return ( <div>
      <Link href={`/row/${rowId}`}><h2 className="bg-white w-28 p-2 rounded-lg" >View</h2></Link>  
    </div> );
}
 
export default Viewtab;
