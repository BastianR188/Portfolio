import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  async sendMail() {
    // action="https://bastian-riedmann.developerakademie.net/send_mail/send_mail.php" 
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;
console.log(nameField.value, messageField.value)
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);

    // senden
    await fetch('https://bastian-riedmann.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );



    nameField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }
}




