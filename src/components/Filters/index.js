import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
// import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { filterSlice } from './filtersSlide';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [priority, setPriority] = useState([])
  const handleChangeText = (e) => {
    // console.log('change text',e.target.value)
    setSearch(e.target.value)
    // dispatch(searchFilterChange(e.target.value)) redux
    //redux-toolkits
    dispatch(filterSlice.actions.searchFilterChange(e.target.value))
  }
  const handleChangeStatus = (e) => {
    // console.log('handleChangeStatus', e.target.value)
    setStatus(e.target.value)
    // dispatch(statusFilterChange(e.target.value)) redux
    dispatch(filterSlice.actions.statusbarFilterChange(e.target.value)) // redux-toolkits
  }
  const handleChangePriority = (e) => {
    // console.log('handleChangePriority', e)
    setPriority(e)
    // dispatch(priorityFilterChange(e))
    dispatch(filterSlice.actions.priorityFilterChange(e))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={search} onChange={handleChangeText}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={handleChangePriority}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
