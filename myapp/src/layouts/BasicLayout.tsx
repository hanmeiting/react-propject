import React from 'react';
import BottomNav from '@/components/BottomNav'
import '@/static/iconfont/iconfont.css'
interface BasicLayout {}

export default function BasicLayout<BasicLayout>(props:any) {
    const {children} = props
    console.log(children); //sy-log
    return (
        <div>
            <article>{children}</article>
            <BottomNav></BottomNav>
        </div>
    );
}