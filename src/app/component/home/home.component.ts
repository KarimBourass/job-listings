import { Job } from './../../model/job';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs$!:Observable<Job[]>;
  constructor(private jobService:JobService) { }

  ngOnInit() {
    this.jobs$ = this.jobService.getJobs();
  }

}
