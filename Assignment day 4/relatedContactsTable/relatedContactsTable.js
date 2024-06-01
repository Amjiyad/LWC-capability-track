import { LightningElement,api,wire } from 'lwc';
import getContactsByAccountId from '@salesforce/apex/AccountsController.getContactsByAccountId';


const COLUMNS = [
    { label: 'Contact Name', fieldName: 'Name', type: 'text' },
    { label: 'Title', fieldName: 'Title', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Contact Owner', fieldName: 'OwnerName', type: 'text' }
];

export default class RelatedContactsTable extends LightningElement {
    @api recordId;
    columns=COLUMNS;
    data;
    

    @wire(getContactsByAccountId, {accountId:'$recordId'})
    wiredCOntacts ({error, data}) {
        if (error) {
            // TODO: Error handling
        } else if (data) {
            // TODO: Data handling
            console.log('data-'+JSON.stringify(data));
            this.data=data.map(eachItem=>{
                return{
                        ...eachItem,
                        OwnerName:eachItem.Owner.Name
                };
            });
        }
    }
}