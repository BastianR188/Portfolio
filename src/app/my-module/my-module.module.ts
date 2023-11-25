import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { IndexComponent } from '../index/index.component';
import { MenuComponent } from '../menu/menu.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { SuccessComponent } from '../success/success.component';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@NgModule({
  declarations: [
     
    MenuComponent,
    TitleComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    IndexComponent,
    MySkillsComponent,
    SuccessComponent,
    PortfolioComponent,  
    FormComponent,
],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule
  ]
})
export class MyModuleModule { }
