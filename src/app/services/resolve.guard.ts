import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Resolve,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<string> {
  userRole = 'user';
  constructor(private router: Router, private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | Observable<string> | Promise<string> {
    // now here can get some data from service / server e.g. return this.dataService.getData()
    // now, on whichever route this ResolveGuard is applied, returned data from here available there

    return this.dataService.getData();

    // throw new Error('Method not implemented.');
  }
}
