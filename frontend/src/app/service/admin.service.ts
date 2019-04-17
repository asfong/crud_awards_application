import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //baseURL: string = 'http://localhost:32323';
  baseURL: string = 'http://flip3.engr.oregonstate.edu:32323';

  getAdmins() {
    return this.http.get(this.baseURL + '/listadmins');
  }

  deleteAdmin(id: number) {
    return this.http.get(this.baseURL + '/deleteadmin/' + id);
  }

  getAdmin(id: number) {
    return this.http.get(this.baseURL + '/listadmin/' + id);
  }

  updateAdmin(id: number, first_name: string, last_name: string, email: string, master: number) {
    const admin = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      // pword: pword,
      master: master
    };
    return this.http.post(this.baseURL + '/updateadmin/' + id, admin);
  }

  addAdmin(first_name: string, last_name: string, email: string, pword: string, master: number) {
    const admin = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      pword: pword,
      master: master
    };
    return this.http.post(this.baseURL + '/addadmin', admin);
  }

  getUsers() {
    return this.http.get(this.baseURL + '/listusers');
  }

  deleteUser(id: number) {
    return this.http.get(this.baseURL + '/deleteuser/' + id);
  }

  getUser(id: number) {
    return this.http.get(this.baseURL + '/listuser/' + id);
  }

  updateUser(id: number, fname: string, lname: string, email: string, signature: string) {
    const user = {
      fname: fname,
      lname: lname,
      email: email,
      signature: signature
    };
    return this.http.post(this.baseURL + '/updateuser/' + id, user);
  }

  addUser(fname: string, lname: string, email: string, pword: string, signature: string) {
    const user = {
      fname: fname,
      lname: lname,
      email: email,
      pword: pword,
      signature: signature
    };
    return this.http.post(this.baseURL + '/adduser', user);
  }

  getAwards() {
    return this.http.get(this.baseURL + '/listawards');
  }

  getCount() {
    return this.http.get(this.baseURL + '/awardscount');
  }

  topGivers() {
    return this.http.get(this.baseURL + '/awardgivers');
  }

  topReceivers() {
    return this.http.get(this.baseURL + '/awardreceivers');
  }

  employeeWeek() {
    return this.http.get(this.baseURL + '/eotw');
  }

  employeeMonth() {
    return this.http.get(this.baseURL + '/eotm');
  }

  giversChart() {
    return this.http.get(this.baseURL + '/giverschart');
  }

  receiversChart() {
    return this.http.get(this.baseURL + '/receiverschart');
  }

  monthlyAwards() {
    return this.http.get(this.baseURL + '/monthlyawards');
  }

}
