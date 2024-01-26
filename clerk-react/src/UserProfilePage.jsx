import { UserProfile } from "@clerk/clerk-react"
import Nav from "./Nav.jsx"
 
function UserProfilePage(){

  return(
  <>
  <Nav/>
  <UserProfile path="/user-profile" routing="path" />
  </>
  )
  }
 
export default UserProfilePage;