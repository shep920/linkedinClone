import { Component, OnInit } from '@angular/core';
import { JobModel } from 'src/app/components/job-card/job-model';
import { mock_job_list } from 'src/app/components/job-card/mock-job-list';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: JobModel[] = [];
  constructor() {
    for (var job of mock_job_list){
      this.jobs.push(job);
    }
   }

  ngOnInit() {
  }

}
