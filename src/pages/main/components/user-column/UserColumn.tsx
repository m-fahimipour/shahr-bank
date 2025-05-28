//@Components
import { Loading } from "~/components/ui/Loading";
import { ColumnContainer } from "~/pages/main/components/ColumnContainer";
import { Search } from "~/pages/main/components/search/Search";
import { UserCard } from "~/pages/main/components/user-column/UserCard";
import { useUserColumn } from "~/pages/main/components/user-column/useUserColumn";
//------------------------------------------------------

export function UserColumn() {
  const { userData, searchedData, isLoading, hasProductSearchParams } =
    useUserColumn();
  return (
    <ColumnContainer>
      <Search searchParam="userSearch" />
      <div className="flex flex-col gap-2 grow-1 overflow-auto">
        {isLoading ? (
          <Loading />
        ) : (
          (hasProductSearchParams ? searchedData : userData)?.map((user) => (
            <UserCard userInfo={user} />
          ))
        )}
      </div>
    </ColumnContainer>
  );
}
