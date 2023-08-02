
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export const UserAvatar = () => {
  const user = useSession();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user.data?.user?.image!} />
      <AvatarFallback>
        {user?.data?.user?.name?.charAt(0)}
        {/* {user?.lastName?.charAt(0)} */}
      </AvatarFallback>
    </Avatar>
  );
};