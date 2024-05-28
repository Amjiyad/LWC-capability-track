import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track inputValue='';

    handleChange(event){
        this.inputValue=event.target.value;
        console.log('input value-'+this.inputValue);
    }
}