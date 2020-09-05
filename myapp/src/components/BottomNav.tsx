import React from 'react';
import { TabBar } from 'antd-mobile';
const menu = [{
    title: '首页',
    link: '/',
    icon: 'shouye',
}, {
    title: '购物车',
    link: '/cart',
    icon: '3',
}, {
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
}, {
    title: '我的',
    link: '/user',
    icon: 'wode',
}]

export default function BottomNav(props) {
    return (
        <div>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition="top"
            >
                {menu.map(({ title, link, icon }) => (
                    <TabBar.Item
                        title={title}
                        key={title}
                        icon={<span className={`iconfont icon-${icon}`}></span>}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        data-seed="logId"
                    >
                    </TabBar.Item>
                ))}
                {/* <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    badge={1}
                    
                    data-seed="logId"
                >
                </TabBar.Item> */}
            </TabBar>
        </div>
    );
}