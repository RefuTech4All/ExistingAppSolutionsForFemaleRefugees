import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { ProjectModel } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'name',  label: 'Name' },
    { name: 'status',  label: 'Status' },
    { name: 'url',  label: 'Url' },
    { name: 'email',  label: 'Email' },
    { name: 'connection',  label: 'Connection' },
    { name: 'presentation',  label: 'Presentation' },
    { name: 'tags',  label: 'Tags', format: v => v.join() }
  ];

  data: Array<ProjectModel> = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService
      .getProjects()
      .then(projects => {
        this.data = projects
      });
  }

}
