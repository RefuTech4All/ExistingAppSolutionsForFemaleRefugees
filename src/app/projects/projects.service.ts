import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ProjectModel } from './project.model';

@Injectable()
export class ProjectsService {
  private url = 'https://raw.githubusercontent.com/RefuTech4All/ExistingAppSolutionsForFemaleRefugees/master/data.json';

  constructor(private http: Http) { }

  getProjects(): Promise<Array<ProjectModel>> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Array<ProjectModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
