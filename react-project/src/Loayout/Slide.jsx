import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  SettingFilled,
  UserOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Slide(props) {
  let [collapsed, setCollapsed] = useState(false);

  function onCollapse() {
    setCollapsed(!collapsed);
  }
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item icon={<DesktopOutlined />}>系统</Menu.Item>
        <SubMenu key="sub1" icon={<SettingFilled />} title="供应商管理">
          <Menu.Item key="1">供应商信息管理</Menu.Item>
          <Menu.Item key="2">供应商类型管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<ScheduleOutlined />} title="服务目录管理">
          <Menu.Item key="3">服务目录</Menu.Item>
          <Menu.Item key="4">服务类型</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<UserOutlined />} title="角色权限管理">
          <Menu.Item key="6">用户管理</Menu.Item>
          <Menu.Item key="5">角色管理</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
