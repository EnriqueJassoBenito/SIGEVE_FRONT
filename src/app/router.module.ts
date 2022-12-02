import {NgModule} from "@angular/core"
import {AuthModule} from "./auth/auth.module";
import {AuthComponent} from "./auth/auth.component";
const routes=[
  { path: 'auth/', component: AuthComponent},
  //{ path: 'login/', component: LoginComponent},
]
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AppRouterModule{

}
