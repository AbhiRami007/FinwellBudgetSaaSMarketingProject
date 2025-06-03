import { LightningElement } from 'lwc';

export default class ThankYouPage extends LightningElement {
  goHome() {
    // Redirect to Salesforce home page, you can change URL as needed
    window.location.href = '/';
  }
}
