import { LightningElement } from 'lwc';

export default class ChildComponentTask3 extends LightningElement {
    inputValue='';

    handleChange(event){
        this.inputValue=event.target.value;
        console.log('value='+this.inputValue);

        const selectEvent = new CustomEvent('mycustomevent', {
            detail: this.inputValue
        });
       this.dispatchEvent(selectEvent);
    }

}