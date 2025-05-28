//@Components
import { useUserInfo } from "~/pages/user/components/useUserInfo";
//------------------------------------------------------

export function UserInfo() {
  const { userInfo } = useUserInfo();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex justify-between w-2xl  border rounded-2xl p-5">
        {/* user info */}
        <div className="flex flex-col gap-2 grow-1">
          {userInfo.map((item) => (
            <div className="flex gap-3 items-center">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* avatar */}
        <div className="w-[100px] h-[100px] bg-gray-100 rounded-full shrink-0"></div>
      </div>
    </div>
  );
}
