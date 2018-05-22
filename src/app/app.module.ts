import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HeaderComponent } from './workspace/header/header.component';
import { MenuComponent } from './workspace/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectProfitHistoryComponent } from './components/project-profit-history/project-profit-history.component';
import { DayProfitComponent } from './components/day-profit/day-profit.component';
import { WithdrawOrderComponent } from './components/withdraw-order/withdraw-order.component';
import { DayElectricCostComponent } from './components/day-electric-cost/day-electric-cost.component';
import { DayAdminCostComponent } from './components/day-admin-cost/day-admin-cost.component';
import { ElectricDepositComponent } from './components/electric-deposit/electric-deposit.component';
import { IncomeCostComponent } from './components/income-cost/income-cost.component';
import { PaySettingComponent } from './components/pay-setting/pay-setting.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AccountComponent } from './components/account/account.component';
import { WorkerOrderComponent } from './components/worker-order/worker-order.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';

// import module
import { ElModule } from 'element-angular';

// if you use webpack, import style
import 'element-angular/theme/index.css';










@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    ProjectListComponent,
    ProjectProfitHistoryComponent,
    DayProfitComponent,
    WithdrawOrderComponent,
    DayElectricCostComponent,
    DayAdminCostComponent,
    ElectricDepositComponent,
    IncomeCostComponent,
    PaySettingComponent,
    UserInfoComponent,
    AccountComponent,
    WorkerOrderComponent,
    CouponListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    BrowserAnimationsModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
