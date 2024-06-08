import { LightningElement } from 'lwc';
import createContactRecord from '@salesforce/apex/AccountsController.createContactRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateContactRecordWithToast extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        console.log(field);
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        }
    }

    handleSave() {
        createContactRecord({ firstName: this.firstName, lastName: this.lastName, email: this.email })
            .then(result => {
                console.log('result-'+result);
                if(result=='Success'){
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact created successfully!',
                            variant: 'success',
                            mode:"sticky"
                        }),
                    );
                     
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';

                }
               
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating contact',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }


}