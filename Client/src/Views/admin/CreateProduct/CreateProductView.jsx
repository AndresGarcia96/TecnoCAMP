import DashboardAdmin from '../../../components/Admin/DashboardUser/DashboardAdmin'
import FormProductos from '../../../components/Admin/FormProductos/FormProductos';
import ProductForm from '../../../components/Admin/ProductForm/ProductForm';

import { Layout, Space, Divider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#0000',
  backgroundColor: '#ffff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '40px',
  color: '#fff',
  backgroundColor: '#001529',
  height: "100vh",
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


const CreateProductVew = () => {

  return (

    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider style={siderStyle}><DashboardAdmin /></Sider>
        <Layout>
          <Header style={headerStyle}><Divider style={{ color: "black", }}>Crear un Producto </Divider></Header>
          <Content style={contentStyle}>
            <FormProductos />
          </Content>
        </Layout>
      </Layout>
    </Space>

  )
}

export default CreateProductVew;