import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//workspace
import { WorkspaceComponent } from './workspace/workspace.component';
//主页
import { DashboardComponent } from './components/dashboard/dashboard.component';
//售卖项目
import { ProjectListComponent } from './components/project-list/project-list.component';
//项目历史收益
import { ProjectProfitHistoryComponent } from './components/project-profit-history/project-profit-history.component';
//每日收益
import { DayProfitComponent } from './components/day-profit/day-profit.component';
//提现记录
import { WithdrawOrderComponent } from './components/withdraw-order/withdraw-order.component';
//电费记录
import { DayElectricCostComponent } from './components/day-electric-cost/day-electric-cost.component';
//管理费记录
import { DayAdminCostComponent } from './components/day-admin-cost/day-admin-cost.component';
//电费押金
import { ElectricDepositComponent } from './components/electric-deposit/electric-deposit.component';
//收支详情
import { IncomeCostComponent } from './components/income-cost/income-cost.component';
//付款管理
import { PaySettingComponent } from './components/pay-setting/pay-setting.component';
//信息设置
import { UserInfoComponent } from './components/user-info/user-info.component';
//我的账户
import { AccountComponent } from './components/account/account.component';
//我的订单
import { WorkerOrderComponent } from './components/worker-order/worker-order.component';
//我的优惠券
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
const adminChildRoutes: Routes = [
    { path: '', component: DashboardComponent },// 主页
    { path: 'projectList', component: ProjectListComponent },// 售卖项目
    { path: 'projectProfitHistory', component: ProjectProfitHistoryComponent },// 项目历史收益
    { path: 'dayProfit', component: DayProfitComponent },// 每日收益
    { path: 'withdrawOrder', component: WithdrawOrderComponent },// 提现记录
    { path: 'dayElectricCost', component: DayElectricCostComponent },// 电费记录
    { path: 'dayAdminCost', component: DayAdminCostComponent },// 管理费记录
    { path: 'electricDeposit', component: ElectricDepositComponent },// 电费押金
    { path: 'incomeCost', component: IncomeCostComponent },// 收支详情
    { path: 'paySetting', component: PaySettingComponent },// 付款管理
    { path: 'userInfo', component: UserInfoComponent },// 信息设置
    { path: 'account', component: AccountComponent },// 我的账户
    { path: 'workerOrder', component: WorkerOrderComponent },// 我的订单
    { path: 'couponList', component: CouponListComponent },// 我的优惠券
    
];

// 定义常量 路由
const appRoutes: Routes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: adminChildRoutes
    }
    // { path: '', component: LoginComponent },
    // { path: 'login', component: LoginComponent },

];


// export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);