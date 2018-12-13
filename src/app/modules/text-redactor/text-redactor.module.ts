import { NgModule } from '@angular/core';
import { TextService } from './text-redactor.service';
import { AppTextComponent } from './components/text-component/text.component';
import { CommonModule } from 'src/app/core/common.module';


@NgModule({
  imports: [CommonModule],
  declarations: [AppTextComponent],
  providers: [TextService],
  exports: [],
})
export class TextRedactorModule {}
