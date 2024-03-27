import { Component } from '@angular/core';
import { jobDetail } from '../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {

  public jobDetail = jobDetail;


}
