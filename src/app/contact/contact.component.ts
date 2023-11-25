import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template: `
  <input (keydown.enter)="onEnterKeyPressed()">
`,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

  //   @HostListener('document:keydown.enter', ['$event'])
  //   onEnterKeyPressed(event: KeyboardEvent) {
  //     // Rufen Sie Ihre gewünschte Funktion hier auf
  //     this.requiredCheck = 0;
  //     this.checkName();
  //     this.checkEmail();
  //     this.checkMessage();
  //     this.checkPrivacy();
  //     if (this.requiredCheck == 0) {
  //       this.setData();
  //       this.sendMail();

  //   }
  // }
  inputValue0: string = '';
  inputValue1: string = '';
  inputValue2: string = '';
  requiredName = false;
  requiredEmail = false;
  requiredText = false;
  requiredCheckbox = false;
  checkbox = false;
  requiredCheck = 0;
  https: any;
  userData = {
    name: '',
    mail: '',
    message: '',
  };

  constructor() {
  }

  checkMail(input: string) {
    if (input.indexOf('@') !== -1) {
      let parts = input.split('@');
      if (parts.length === 2 && parts[0].length > 2 && parts[1].length > 2) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  checkboxtoggle() {
    this.checkbox = !this.checkbox;
  }

  setStyleBorder = (requi: any) => {
    return !requi && this.requiredCheck > 0 ? { 'border-color': '#e61c40' } : requi ? { 'border-color': '#70e61c' } : null;
  }


  checkInputName = () => {
    this.requiredName = this.inputValue0.length <= 1 ? false : true;
  }

  checkInputEmail = () => {
    this.requiredEmail = this.checkMail(this.inputValue1) ? false : true;
  }

  checkInputText = () => {
    this.requiredText = this.inputValue2.length <= 1 ? false : true;
  }

  sendMessage(event: Event) {
    event.preventDefault();
    this.requiredCheck = 0;
    this.checkName();
    this.checkEmail();
    this.checkMessage();
    this.checkPrivacy();
    if (this.requiredCheck == 0) {
      this.setData();
      this.sendMail();
    }
  }

  private setData() {
    this.userData = {
      name: this.inputValue0,
      mail: this.inputValue1,
      message: this.inputValue2
    };

    this.emptyValues();
  }

  private emptyValues() {
    this.inputValue0 = '';
    this.inputValue1 = '';
    this.inputValue2 = '';

    ['name', 'email', 'text'].forEach(type => {
      let element = document.getElementById(type);
      if (element) {
        (element as HTMLInputElement).value = '';
      }
    });
  }

  private sendMail() {
    let data = JSON.stringify(this.userData);

    fetch('https://formspree.io/f/maygzbaa', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        window.location.href = './success';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private checkPrivacy() {
    if (!this.checkbox) {
      this.requiredCheckbox = false;
      this.requiredCheck++;
    } else {
      this.requiredCheckbox = true;
    }
  }

  private checkMessage() {
    this.checkInputText();
    if (!this.requiredText) {
      this.requiredCheck++;
    }
  }

  private checkEmail() {
    this.checkInputEmail();
    if (!this.requiredEmail) {
      this.requiredCheck++;
    }
  }

  private checkName() {
    this.checkInputName();
    if (!this.requiredName) {
      this.requiredCheck++;
    }
  }

  


}