import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Employee} from '../employees/employee';


@Injectable()
export class EmployeesProvider {
  employeeList:AngularFireList<any>;
  selectedEmployee: Employee =new Employee();
  constructor(public http: HttpClient, private firebase:AngularFireDatabase) {
    console.log('Hello EmployeesProvider Provider');

  }
  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee){
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office:employee.office,
      salary:employee.salary
    });
  }
  UpdateEmployee(employee: Employee){
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office:employee.office,
      salary:employee.salary
    });
  }

}
