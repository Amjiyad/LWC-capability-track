import { LightningElement,track,wire } from 'lwc';
import getAccountss from '@salesforce/apex/AccountsController.getAccountss';
import getAccountDetails from '@salesforce/apex/AccountsController.getAccountDetails';

export default class AccountModal extends LightningElement {
    @track accounts;
    @track error;
    @track isModalOpen = false;
    @track selectedAccount = {};

    @wire(getAccountss)
    wiredAccounts({ error, data }) {
        if (data) {
            console.log('account data-'+data);
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    handleShowDetails(event) {
        const accountId = event.target.dataset.id;
        getAccountDetails({ accountId })
            .then(result => {
                this.selectedAccount = result;
                this.isModalOpen = true;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleCloseModal() {
        this.isModalOpen = false;
    }
}