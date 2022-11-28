import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div class="row">
  //     <div class="m-t-1">
  //       <button class="btn btn-primary" (click)="doGET()">GET</button>
  //       <button class="btn btn-primary" (click)="doPOST()">POST</button>
  //       <button class="btn btn-primary" (click)="doPUT()">PUT</button>
  //       <button class="btn btn-primary" (click)="doDELETE()">DELETE</button>
  //     </div>
  //   </div>

  //   <div class="row">
  //     <div class="m-t-1">
  //       <button class="btn btn-secondary" (click)="doGETAsPromise()">
  //         As Promise
  //       </button>
  //       <button class="btn btn-secondary" (click)="doGETAsPromiseError()">
  //         Error as Promise
  //       </button>
  //       <button class="btn btn-secondary" (click)="doGETAsObservableError()">
  //         Error as Observable
  //       </button>
  //     </div>
  //   </div>

  //   <div class="row">
  //     <div class="m-t-1">
  //       <button class="btn btn-danger" (click)="doGETWithHeaders()">
  //         With Headers
  //       </button>
  //     </div>
  //   </div>
  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular todo';
  sendIt = 'This data is from parent';

  apiRoot: string = 'https://httpbin.org';

  constructor(private http: HttpClient) {}

  logValueFromChild(value: string) {
    console.info('value from the child ', value);
  }

  doGET() {
    console.log('GET');
    let url = `${this.apiRoot}/get`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http.get(url, httpOptions).subscribe((res) => console.log(res));
  }

  doPOST() {
    console.log('POST');
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http
      .post(url, { moo: 'foo', goo: 'loo' }, httpOptions)
      .subscribe((res) => console.log(res));
  }

  doPUT() {
    console.log('PUT');
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http
      .put(url, { moo: 'foo', goo: 'loo' }, httpOptions)
      .subscribe((res) => console.log(res));
  }

  doDELETE() {
    console.log('DELETE');
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http.delete(url, httpOptions).subscribe((res) => console.log(res));
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    let url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then((res) => console.log(res));
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        (res) => console.log(res),
        (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    let url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      (res) => console.log(res),
      (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa('username:password'),
      }),
    };

    let url = `${this.apiRoot}/get`;

    this.http.get(url, httpOptions).subscribe(
      (res) => console.log(res),
      (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}
