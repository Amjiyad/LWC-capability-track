import { LightningElement,track} from 'lwc';

export default class ChildComponentAssignment9 extends LightningElement {
    @track absyzUrl='https://absyz.com/';
    @track trailheadUrl='https://trailhead.salesforce.com/';

    sendAbsyzLink(){
        this.dispatchEvent(
            new CustomEvent("sendurl", {
            detail: this.absyzUrl
            })
        );
    }
    sendTrailheadLink(){
        this.dispatchEvent(
            new CustomEvent("sendurl", {
            detail: this.trailheadUrl
            })
        );
    }
}