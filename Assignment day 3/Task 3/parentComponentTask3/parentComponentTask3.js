import { LightningElement } from 'lwc';

export default class ParentComponentTask3 extends LightningElement {
    valueFromChild=''
    handleChildData(event){

        this.valueFromChild=event.detail;

    }
}