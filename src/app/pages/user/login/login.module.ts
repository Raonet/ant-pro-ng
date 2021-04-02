import { NgModule } from '@angular/core';
import { UserLoginComponent } from './login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconsProviderModule } from './icons-provider.module';
@NgModule({
  declarations: [UserLoginComponent],
  exports: [UserLoginComponent],
  imports: [
    UserLoginRoutingModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserLoginModule {}
