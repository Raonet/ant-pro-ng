import { NgModule } from '@angular/core';
import { UserLoginComponent } from './login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [UserLoginComponent],
  exports: [UserLoginComponent],
  imports: [UserLoginRoutingModule, NzInputModule, NzFormModule],
})
export class UserLoginModule {}
