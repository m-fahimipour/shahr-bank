//@React
import { useLayoutEffect, useState } from "react";
//------------------------------------------------------

//@Third-Party
import { useSearchParams } from "react-router";
//------------------------------------------------------

//@Services
import { useGetUsersQuery } from "~/services";
//------------------------------------------------------

//@Types
import type { IUser } from "~/types/common";
//------------------------------------------------------

export function useUserColumn() {
  const [searchParams] = useSearchParams();
  const [searchedData, setSearchData] = useState<IUser[] | undefined>([]);

  const { data: userData, isLoading } = useGetUsersQuery(undefined);

  useLayoutEffect(() => {
    if (searchParams.has("userSearch")) {
      setSearchData(
        userData?.filter((user) =>
          (
            user.name.firstname.toLowerCase() + user.name.lastname.toLowerCase()
          ).includes(searchParams.get("userSearch")!.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }, [searchParams.get("userSearch"), isLoading]);

  return {
    userData,
    searchedData,
    isLoading,
    hasProductSearchParams: searchParams.has("userSearch"),
  };
}
