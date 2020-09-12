import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.css']
})
export class AdddocumentComponent implements OnInit {
  
  showAllRecept: boolean;
  url: string | ArrayBuffer;
  

  constructor() { }

  ngOnInit(): void {
  }

  showNextAllRecp() {
    this.showAllRecept = true;
  }

  onFileInput(event) {
    console.log("event",event)
    console.log("eventttt file",event.target.files[0].name)
    if(event.target.files && event.target.files[0].name) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
      }
      console.log("urlllllllll",this.url);
    }
  }

}
