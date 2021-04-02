import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserHeaderComponent } from './header/header.component';
import { UserFooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [UserComponent, UserHeaderComponent, UserFooterComponent],
  exports: [UserComponent],
  imports: [UserRoutingModule],
})
export class UserModule {}
