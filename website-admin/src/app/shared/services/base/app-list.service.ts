import { RestService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { AppBaseService } from './app-base.service';

export class AppListService<TPrimaryKey, TEntityDto, TGetInputDto> extends AppBaseService<
  TPrimaryKey,
  TEntityDto,
  TGetInputDto
> {
  constructor(restService: RestService, serviceName: string) {
    super(restService, serviceName);
  }

  toggleStatus(id: TPrimaryKey): Observable<void> {
    return this.restService.request(
      {
        url: `${this.apiUrl}/${id}/toggle-status`,
        method: 'POST',
      },
      {
        apiName: this.apiName,
      }
    );
  }
}
