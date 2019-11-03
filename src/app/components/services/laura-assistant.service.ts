import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LauraAssistantService {

  constructor(private http: HttpClient) { }

  postConversation(message: string, isAudio: boolean): Observable<any>{
    const formData = new FormData();
    formData.append("message", message);
    formData.append("isAudio", ""+isAudio);

    return this.http.post(`http://localhost:8090/api/assistant/conversation`,formData);
  }

}
