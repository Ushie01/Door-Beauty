import Headerdash from "./headerdash";
import Navbar from "./navbar";


const Users = () => {
    return ( <div>
        <Headerdash/>
        <div className="flex">
         <Navbar/> 
         <h3>I am the user</h3>  
        </div>
        
    </div> );
}
 
export default Users;