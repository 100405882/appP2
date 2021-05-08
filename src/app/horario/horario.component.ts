import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
