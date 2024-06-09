import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class GetRecordUisngUiRecordApi extends LightningElement {
    @api recordId;
    data;
    error;

    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD,INDUSTRY_FIELD,RATING_FIELD]})
    wiredRecord({error, data}) {
        if (error) {
            // TODO: Error handling
        } else if (data) {
            // TODO: Data handling
            console.log('Data123-'+JSON.stringify(data));
            this.data=data;
        }
    }

    get name() {
        return this.data?.fields.Name.value;
    }

    get industry() {
        return this.data?.fields.Industry.value;
    }

    get rating() {
        return this.data?.fields.Rating.value;
    }

}