import { Job } from './../../model/job';
import { JobService } from './../../services/job.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges {

  @Input() searchInput!: string;
  jobs!: Job[];
  constructor(private jobService: JobService) { }

  ngOnChanges() {
    this.jobService.getJobs().subscribe(
      jobs => {
        if (this.searchInput)
          this.jobs = jobs.filter((job) => job.position.toLowerCase().includes(this.searchInput) || job.role.toLowerCase().includes(this.searchInput) )
        else
          this.jobs = jobs

      }
    );



    console.log(this.searchInput);
  }

}
