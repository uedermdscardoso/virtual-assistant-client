import { Component, OnInit } from '@angular/core';
import { LauraAssistantService } from '../services/laura-assistant.service';

@Component({
  selector: 'laura-assistant',
  templateUrl: './laura-assistant.component.html',
  styleUrls: ['./laura-assistant.component.css']
})
export class LauraAssistantComponent implements OnInit {

  public userText: string; 
  public texts: string[] = [];
  
  constructor(private lauraAssistantService: LauraAssistantService) { }

  ngOnInit() {}

  funcao(event){
    this.send();
  }

  send(){
    this.texts.push("Usuário: "+this.userText);
    this.userText = '';

    this.lauraAssistantService.postConversation(this.texts[this.texts.length-1], true).subscribe(
      (message) => {
        this.texts.push("Laura: "+message.text);
      }, 
      (err) => {
        console.log(err);
      }
    );
  }
  
}
