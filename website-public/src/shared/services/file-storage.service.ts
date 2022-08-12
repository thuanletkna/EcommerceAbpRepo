
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileStorageDto } from '../model/file-storage/file-storage.dto';
import { Rest } from '../rest-service/rest';
import { RestService } from '../rest-service/rest.service';

@Injectable({ providedIn: 'root' })
export class FileStorageService {
  constructor(private readonly restService: RestService) { }

  getNatsFile(stopId: string): Observable<FileStorageDto[]> {
    return this.restService.request({
      url: '/api/app/file-storage/stop-file/' + stopId,
      method: 'GET',
    });
  }

  getDetail(id: string): Observable<FileStorageDto> {
    return this.restService.request({
      url: '/api/app/file-storage/' + id + '/detail',
      method: 'GET',
    });
  }

  

  delete(id: string): Observable<void> {
    return this.restService.request({
      url: '/api/app/file-storage/' + id,
      method: 'DELETE',
    });
  }

}
