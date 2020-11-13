import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { Route, Switch } from "react-router-dom";

import Slide from "./Slide";
import Nav from "./Header";
import ServiceList from "../pages/service/ServiceList";
import RouteWithSubRoutes from "../components/RouteWithRoutes";
import routes from "../router";
const { Content } = Layout;

export default class Index extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Slide></Slide>
        <Layout className="site-layout">
          <Nav />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
