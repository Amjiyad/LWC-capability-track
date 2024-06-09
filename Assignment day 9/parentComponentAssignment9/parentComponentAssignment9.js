import { LightningElement } from 'lwc';

export default class ParentComponentAssignment9 extends LightningElement {
    childData;

    handleChildData(event) {
        this.childData = event.detail
    }
}