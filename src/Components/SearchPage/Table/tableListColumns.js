import { LevelBadge } from './ColumnsBadge/LevelBadge'
import { ColumnsPic } from './ColumnsPic/ColumnsPic'
const tableHeadTitles = [
  'نـام کـاربـری  |  Username',
  'مکـان  |  Location',
  'ســاز اصلی  |  Main Instrument',
  'سطـح  |  Level',
  'سـبـک  |  Style',
]
export const columns = [
  {
    Header: ' ',
    accessor: 'UserImg',
    width: 100,
    Cell: ColumnsPic,
    disableFilters: true,
  },
  {
    Header: 'نـام کـاربـری  |  Username',
    accessor: 'UserName',
    width: 180,
    disableFilters: true,
  },
  {
    Header: 'مکـان  |  Location',
    accessor: 'Location',
    disableFilters: true,
  },
  {
    Header: 'ســاز اصلی  |  Main Instrument',
    accessor: 'MainInstrument',

    disableFilters: true,
  },
  {
    Header: 'سطـح  |  Level',
    accessor: 'Level',
    Cell: LevelBadge,
    disableFilters: true,
  },
  {
    Header: 'سـبـک  |  Style',
    accessor: 'Style',
    disableFilters: true,
    width: 180,
  },
]
