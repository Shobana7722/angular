import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private hobj:HttpClient) { }
  private url:string = "http://localhost:3000/books";
  public savebook(bookobj:Book)
  {
    let data = JSON.stringify(bookobj);
    return this.hobj.post(this.url,data);
  }
  public removebook(id:number)
  {
    let u = this.url + "/"+id;
    return this.hobj.delete(u);
  }
  public updatebook(id:number,bookobj:Book)
  {
    let u = this.url + "/"+id;
    let data = JSON.stringify(bookobj);
    return this.hobj.put(u,data);
  }
  public selectbooks()
  {
    return this.hobj.get<Book[]>(this.url);
  }
  public selectbyid(id:number)
  {
    let u = this.url + "/"+id;
    return this.hobj.get<Book>(u);
  }
}
