import { LightningElement } from 'lwc';

export default class ParentComponentAssignment5 extends LightningElement {

    callChildMethod(){
        
        this.template.querySelector("c-child-component-assignment5").childMethod();
    }
}