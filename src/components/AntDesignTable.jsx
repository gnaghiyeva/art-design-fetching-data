import { Button, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const AntDesignTable = () => {
    const [supplier, setSupplier] = useState([])
   
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      setFilteredInfo(filters);
      setSortedInfo(sorter);
    };
    const clearFilters = () => {
      setFilteredInfo({});
    };
    const clearAll = () => {
      setFilteredInfo({});
      setSortedInfo({});
    };
    const setAgeSort = () => {
      setSortedInfo({
        order: 'descend',
        columnKey: 'age',
      });
    };

    useEffect(()=>{
        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res=>res.json())
        .then(data=>setSupplier(data));
    },[supplier])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
            ellipsis: true,
        },
      {
        title: 'Contact Name',
        dataIndex: 'contactName',
        key: 'contactName',
        filters: supplier.map((item)=>{
            return {
                text: item.contactName,
                value: item.contactName
            }
        }),
        filteredValue: filteredInfo.contactName || null,
        onFilter: (value, record) => record.contactName.includes(value),
        sorter: (a, b) => a.contactName.length - b.contactName.length,
        sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'contactTitle',
        dataIndex: 'contactTitle',
        key: 'contactTitle',
        sorter: (a, b) => a.contactTitle.length - b.contactTitle.length,
        sortOrder: sortedInfo.columnKey === 'contactTitle' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
        ellipsis: true,
      },
    ];
    return (
        <>
        <Space
          
        >
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table style={{
            marginBottom: 16,
            display:'block',
            width:'80%',
            margin:'50px auto'
          }} columns={columns} dataSource={supplier} onChange={handleChange} />
      </>
    )
}

export default AntDesignTable