import { DataTable } from "./DataTable";
import { users } from "./data";

export function Admin() {
  return (
    <>
      <DataTable data={users}></DataTable>
    </>
  );
}
