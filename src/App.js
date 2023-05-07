import { Button, Space, Select, Divider, Row, Col, Table } from 'antd';
import AntDesignTable from './components/AntDesignTable';

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const style= { background: '#0092ff', padding: '8px 0' };
function App() {
  return (
    <>
      {/* <Divider orientation='center'>simple</Divider>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>

      <Select
        mode="multiple"
        style={{
          width: '100%',
        }}
        placeholder="select one country"
        defaultValue={['china']}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <Space>
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </Space>
        </Option>
        <Option value="usa" label="USA">
          <Space>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </Space>
        </Option>
        <Option value="japan" label="Japan">
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </Space>
        </Option>
        <Option value="korea" label="Korea">
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </Space>
        </Option>
      </Select>

      <Divider orientation='center'>Responsive grid</Divider>
      <Row gutter={[10,20]}>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
        <div style={style}>col-6</div>
      </Col>
      </Row> */}

      <AntDesignTable/>
    </>
  );
}

export default App;
