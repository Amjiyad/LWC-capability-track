import { LightningElement,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordUsingUiRecordApi extends LightningElement {
    accountName='';
    accountRating='';

    handleChange(event){
        console.log(event.target.name);
        if(event.target.name=='name'){
            this.accountName=event.target.value;
            console.log('account name-'+this.accountName);
        }
        else if(event.target.name=='rating'){
            this.accountRating=event.target.value;
            console.log('account rating-'+this.accountRating);
        }
    }

    createAccount() {
        const fields = {};
        fields['Name'] = this.accountName;
        fields['Rating'] = this.accountRating;
        const recordInput = {
            apiName:'Account',
            fields: fields
        };
        createRecord(recordInput).then((record) => {
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Account created successfully.!',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        });
    }

}