import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));
const HeaderApp =  ()=> {
    return (
        <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    )
}

export default HeaderApp;