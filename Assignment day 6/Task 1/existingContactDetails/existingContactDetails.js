import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/AccountsController.getContacts';

export default class ExistingContactDetails extends LightningElement {
    @wire(getContacts)
    contacts;

    get showContacts(){
        return this.contacts;
    }

}