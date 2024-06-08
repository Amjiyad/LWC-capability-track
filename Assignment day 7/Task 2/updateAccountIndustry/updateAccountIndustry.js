import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class UpdateAccountIndustry extends LightningElement {
    @api availableActions=[];
    @api accountRecordId;
    objectApiName='Account';
    fields=['Name','Type','Industry'];
    
    handleSuccess(event){
        console.log('inside handle Success');
        const evt=new ShowToastEvent({
            title:"Record Update",
            message:"Account record is updated Successfully",
            variant:"success",
            mode:"sticky"
        });
        console.log('before dispatch');
        this.dispatchEvent(evt);
        console.log('after dispatch');
        this.handleGoNext();
    }
    handleGoNext() {
        // check if NEXT is allowed on this screen
        if (this.availableActions.find((action) => action === 'NEXT')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
}