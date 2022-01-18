import Table from '../components/Table/Table';
import { SuccessIcon } from '../static/icons';

const dataset = [{
  id: 1,
  name: 'Mazda MX-5',
  chassis: 'NA',
  value: 6000,
}, {
  id: 2,
  name: 'BMW M3',
  chassis: 'E46',
  value: 30000,
}, {
  id: 3,
  name: 'BMW M5',
  chassis: 'E39',
  value: 50000,
}];

export const basic = ({ spacing, clickable, withoutHeader }) => {
  return (
    <Table
      spacing={spacing}
      dataset={dataset}
      onRowClick={clickable ? console.log : undefined}
      withoutHeader={withoutHeader}
      columns={[{
        dataIndex: 'id',
        title: 'ID',
      }, {
        dataIndex: 'name',
        title: 'Name',
      }, {
        dataIndex: 'chassis',
        title: 'Chassis',
      }, {
        dataIndex: 'value',
        title: 'Value',
        render: (value: number) => (
          <>
            {SuccessIcon}
            {value.toLocaleString()}
          </>
        ),
      }]}
      cardProps={{
        title: 'Table example',
        description: 'Utilizing Card component',
      }}
    />
  );
};

export default {
  component: Table,
  argTypes: {
    clickable: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    stickyHeader: {
      control: { disable: true },
    },
    appendToCard: {
      control: { disable: true },
    },
    dataset: {
      control: { disable: true },
    },
    cardProps: {
      control: { disable: true },
    },
    columns: {
      control: { disable: true },
    },
    texts: {
      control: { disable: true },
    },
  },
};