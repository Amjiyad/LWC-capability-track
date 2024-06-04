import { LightningElement,api } from 'lwc';

export default class ChildComponentAssignment5 extends LightningElement {
    message='';

    @api
    childMethod(){
        console.log('inside child Method');
        this.message='Text inside child method';
    }
}