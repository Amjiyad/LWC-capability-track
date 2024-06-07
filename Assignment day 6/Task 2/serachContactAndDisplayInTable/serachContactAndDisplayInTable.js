import { LightningElement,wire } from 'lwc';
import getContactsBySerachKey from '@salesforce/apex/AccountsController.getContactsBySerachKey';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'Email' },
];

export default class SerachContactAndDisplayInTable extends LightningElement {
    columns=columns;
    searchKey='';
    data=[];

    handleChange(event){
        console.log(event.detail.value);
        this.searchKey=event.detail.value;
    }
    @wire(getContactsBySerachKey, {searchKey:'$searchKey'})
    wiredContacts ({error, data}) {
        if (error) {
            // TODO: Error handling
        } else if (data) {
            // TODO: Data handling
            console.log('data:'+JSON.stringify(data));
            this.data=data;
        }
    }
}