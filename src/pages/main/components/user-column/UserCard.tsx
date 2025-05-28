//@Third-Party
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
//------------------------------------------------------

//@Types
import type { IUser } from "~/types/common";

interface IUserCard {
  userInfo: IUser;
}
//------------------------------------------------------

export function UserCard({ userInfo }: IUserCard) {
  const navigate = useNavigate();

  const info: { label: string; value: string }[] = [
    {
      label: "name",
      value: userInfo.name.firstname + " " + userInfo.name.lastname,
    },
    {
      label: "email",
      value: userInfo.email,
    },
  ];

  return (
    <div className="flex p-3 w-full rounded-2xl border border-gray-500 justify-between">
      {/* user info */}
      <div className="flex flex-col gap-3">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span>{item.label + ": "}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* action button */}
      <Button
        className="cursor-pointer self-end"
        onClick={() => {
          navigate(`/${userInfo.id}`);
        }}
      >
        Details
      </Button>
    </div>
  );
}
