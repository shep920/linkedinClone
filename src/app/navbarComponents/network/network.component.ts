import { Component, OnInit } from '@angular/core';
import { mock_post_list } from 'src/app/cards/post/mock-post-list';
import { PostModel } from 'src/app/cards/post/post-model';
import { mock_message_list } from 'src/app/components/network-message/mock-network-list';
import { MessageModel } from 'src/app/components/network-message/network-model';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  messages: MessageModel[] = [];
  constructor() {

    for (var message of mock_message_list){
      this.messages.push(message);
    }
   }

  ngOnInit() {
  }

}
