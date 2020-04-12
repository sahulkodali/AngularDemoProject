import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
  @Output() featureClicked = new EventEmitter<string>();

    onSelect(featureSelected: string){
        console.log(featureSelected);
        this.featureClicked.emit(featureSelected);
    }

}