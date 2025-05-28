//@React
import { useMemo } from "react";
//------------------------------------------------------

//@Third-Party
import { useParams } from "react-router";
//------------------------------------------------------

//@Services
import { useGetUserInfoQuery } from "~/services";
//------------------------------------------------------

export function useUserInfo() {
  const { userId } = useParams<{ userId: string }>();
  const { data: userData, isLoading } = useGetUserInfoQuery(userId ?? "");

  const userInfo: { label: string; value: string | undefined }[] = useMemo(
    () => [
      {
        label: "name",
        value: [userData?.name.firstname, userData?.name.lastname].join(" "),
      },
      {
        label: "username",
        value: userData?.username,
      },
      {
        label: "email",
        value: userData?.email,
      },
      {
        label: "phoneNumber",
        value: userData?.phone,
      },
      {
        label: "address",
        value: [
          userData?.address.number,
          userData?.address.street,
          userData?.address.city,
        ].join(" - "),
      },
    ],
    [isLoading]
  );

  return {
    userInfo,
  };
}
