//@Types
import type { ReactNode } from "react";

interface IColumnContainer {
  children: ReactNode;
}
//------------------------------------------------------

export function ColumnContainer({ children }: IColumnContainer) {
  return (
    <div className="flex flex-col px-4 gap-3 w-full h-full overflow-auto">
      {children}
    </div>
  );
}
