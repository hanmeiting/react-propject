import ServiceList from './pages/service/ServiceList'
// console.log(ServiceList);
// const a = import('./pages/service/ServiceList')
// a.then((res) => {
//     console.log(res);
// })
const routes = [{
    path: '/',
    name: '服务目录管理',
    component: ServiceList,
    // title: () => import('./pages/service/ServiceList')
    // children: [{
    //     path: '/service/ServiceList',
    //     component: ServiceList,
    //     // component: () => import('./pages/service/ServiceList')
    // }]
}]

export default routes