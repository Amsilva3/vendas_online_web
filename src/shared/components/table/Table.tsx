/* eslint-disable @typescript-eslint/no-explicit-any */
import TAbleAntD, { TableProps } from 'antd/es/table';

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  return <TAbleAntD {...props} />;
}

export default Table;
