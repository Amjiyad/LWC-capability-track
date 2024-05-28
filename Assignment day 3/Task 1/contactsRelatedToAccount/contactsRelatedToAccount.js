import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountsController.getAccounts';
import createContact from '@salesforce/apex/AccountsController.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactsRelatedToAccount extends LightningElement {

    accountOptions = [];
    lastName;
    title;
    email;
    phone;
    accountId;

    connectedCallback() {
        this.loadAccounts();

    }
    loadAccounts() {
        getAccounts()
            .then(result => {
                console.log('Accounts-' + JSON.stringify(result));
                this.accountOptions = result.map(account => {
                    return { label: account.Name, value: account.Id }
                });
                console.log('after map-' + JSON.stringify(this.accountOptions));
            })
            .catch(error => {
                // TODO Error handling
            });
    }
    handleChange(event) {

        const name = event.target.name;
        console.log('name-' + name);
        if (name == 'account') {
            this.accountId = event.target.value;
            console.log(this.accountId);
        }
        else if (name == 'lastName') {
            this.lastName = event.detail.value;
            console.log(this.lastName);
        }
        else if (name == 'title') {
            this.title = event.detail.value;
            console.log(this.title);
        }
        else if (name == 'email') {
            this.email = event.detail.value;
            console.log(this.email);
        }
        else if (name == 'phone') {
            this.phone = event.detail.value;
            console.log(this.phone);
        }

    }

    handleClick() {
        // console.log('Id-'+this.accountId);
        // console.log('lname-'+this.lastName);
        // console.log('title-'+this.title);
        // console.log('email-'+this.email);
        // console.log('phone-'+this.phone);

        createContact({ accountId: this.accountId, lastName: this.lastName, title: this.title, email: this.email, phone: this.phone })
            .then(result => {
                console.log('result after insert-' + JSON.stringify(result));
                if (result != null) {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact created successfully',
                            variant: 'success'
                        }));
                }


            })
            .catch(error => {
                // TODO Error handling
            });


    }

}