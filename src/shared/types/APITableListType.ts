export type TableColumnType = {
  data: string;
  searchable?: boolean;
};

export type TableFilterType = {
  column: string;
  value: string | Array<string>;
  operator: 'eq' | 'not' | 'is' | 'ne' | 'or' | 'iLike' | 'in';
};

export type TableOrderType = {
  column: string;
  dir: 'asc' | 'desc';
};

export type TableSearchType = {
  value: string;
};

export type TableSpecType = {
  columns: Array<TableColumnType>;
  filter?: Array<TableFilterType>
  order?: TableOrderType;
  search?: TableSearchType;
  page: number;
  perPage: number;
};

export type TableResponseType<T> = {
  recordsTotal: number;
  data: Array<T>;
};
