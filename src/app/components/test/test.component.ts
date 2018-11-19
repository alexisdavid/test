import { Component, OnInit } from '@angular/core';
import { TestVocService, Preguntas } from '../../services/test-voc.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  preguntas:Preguntas[]=[];

  constructor( private test:TestVocService) { }

  ngOnInit() {

    this.preguntas = this.test.getPregunta();
    console.log(this.preguntas);
    

  }
 
}
