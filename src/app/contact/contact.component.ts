import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template: `
  <input (keydown.enter)="onEnterKeyPressed()">
`,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @HostListener('document:keydown.enter', ['$event'])
  onEnterKeyPressed(event: KeyboardEvent) {
    // Rufen Sie Ihre gewünschte Funktion hier auf
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

  inputValue0: string;
  inputValue1: string;
  inputValue2: string;
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
    this.inputValue0 = '';
    this.inputValue1 = '';
    this.inputValue2 = '';
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
  
  setStyleBorder(requi: boolean): { [key: string]: string } | null {
    if (!requi && this.requiredCheck > 0) {
      return { 'border-color': '#e61c40' };
    }
    if (requi) {
      return { 'border-color': '#70e61c' };
    }
    return null;
  }

  checkInputName() {
    if (this.inputValue0.length <= 1) {
      this.requiredName = false;
    } else {
      this.requiredName = true;
    }
  }

  checkInputEmail() {
    if (this.checkMail(this.inputValue1)) {
      this.requiredEmail = false;
    } else {
      this.requiredEmail = true;
    }
  }

  checkInputText() {
    if (this.inputValue2.length <= 1) {
      this.requiredText = false;
    } else {
      this.requiredText = true;
    }
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
    this.userData.name = this.inputValue0;
    this.userData.mail = this.inputValue1;
    this.userData.message = this.inputValue2;

    this.emptyValues();
  }

  private emptyValues() {
    this.inputValue0 = '';
    this.inputValue1 = '';
    this.inputValue2 = '';
    let types = ['name', 'email', 'text'];
    for (let i = 0; i < types.length; i++) {
      let element = document.getElementById(`${types[i]}`);
      if (element) {
        (element as HTMLInputElement).value = '';
      }
    }
  }

  private sendMail() {
    const data = JSON.stringify(this.userData);

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