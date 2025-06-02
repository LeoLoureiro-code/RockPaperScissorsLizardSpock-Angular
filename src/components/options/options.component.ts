import { Component, Output, EventEmitter} from '@angular/core'; 
import { OptionComponent } from '../option/option.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'options',
  standalone: true,
  imports: [OptionComponent, CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {

  @Output() optionSelected = new EventEmitter<string>();

  onSelect(option: string) {
    this.optionSelected.emit(option);
  }


}
