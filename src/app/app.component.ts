import { Component, OnInit } from '@angular/core';
import DockerNames from './supportFunctions/dockerNames';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  checked = false;
  customInputTitle = '';
  customInput2Title = '';

  ngOnInit(): void {
    this.changeTitle();
    this.changeCustomInputTitle();
  }
  
  changeTitle(){
    this.title = DockerNames.generateName();
  }

  changeCheck(){
    this.checked = !this.checked;
  }

  changeCustomInputTitle(){
    this.customInputTitle = DockerNames.generateName();
  }
}
