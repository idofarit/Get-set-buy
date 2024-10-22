import { currentUser } from "@clerk/nextjs/server";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        alt="profile image"
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white">
      UserIcon
    </LuUser2>
  );
}
export default UserIcon;
