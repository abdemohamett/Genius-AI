
import getCurrentUser from "@/app/actions/getCurrentUser"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 
 const UserButton = async() => {
  const user = await getCurrentUser()
   return (
    <Avatar className="h-14 w-14">
      <AvatarImage src={user?.image!} />
      <AvatarFallback className="font-extrabold text-2xl">
        {user?.name?.charAt(0)}
      </AvatarFallback>
    </Avatar>
   )
 }
 
 export default UserButton