import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  data!: project
  constructor(
    private router: ActivatedRoute,
    private ProjectService: ProjectService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    
    this.ProjectService.getProjectDetail(id).subscribe((data) => {
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
