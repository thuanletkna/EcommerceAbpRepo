
import { Observable } from 'rxjs';
import { IResponsePaginate } from 'src/shared/model/base.dto';
import { RestService } from 'src/shared/rest-service/rest.service';

export class AppBaseService<TPrimaryKey, TEntityDto, TGetInputDto> {
  protected apiName = 'Default';
  protected readonly apiUrl: string;
  constructor(
    protected readonly restService: RestService,
    protected readonly serviceName: string
  ) {
    this.apiUrl = '/api/app/' + serviceName;
  }

  getByPaged(params = {} as TGetInputDto): Observable<IResponsePaginate<TEntityDto>> {
    return this.restService.request(
      {
        url: `${this.apiUrl}/paged`,
        method: 'GET',
        params,
      },
      {
        apiName: this.apiName,
      }
    );
  }

  // getUsingFilter(params = {} as Undefinable<TGetInputDto>): Observable<TEntityDto[]> {
  //   return this.restService.request(
  //     {
  //       url: `${this.apiUrl}/using-filter`,
  //       method: 'GET',
  //       params,
  //     },
  //     {
  //       apiName: this.apiName,
  //     }
  //   );
  // }

  getByPagedReportObservations(params = {} as TGetInputDto): Observable<IResponsePaginate<TEntityDto>> {
    return this.restService.request(
      {
        url: `${this.apiUrl}`,
        method: 'GET',
        params,
      },
      {
        apiName: this.apiName,
      }
    );
  }

  getAll(): Observable<TEntityDto[]> {
    return this.restService.request(
      {
        url: `${this.apiUrl}`,
        method: 'GET',
      },
      {
        apiName: this.apiName,
      }
    );
  }

  getById(id: TPrimaryKey): Observable<TEntityDto> {
    return this.restService.request(
      {
        url: `${this.apiUrl}/${id}`,
        method: 'GET',
      },
      {
        apiName: this.apiName,
      }
    );
  }

  deleteById(id: TPrimaryKey): Observable<void> {
    return this.restService.request(
      {
        url: `${this.apiUrl}/${id}`,
        method: 'DELETE',
      },
      {
        apiName: this.apiName,
      }
    );
  }

  save(input: TEntityDto): Observable<TPrimaryKey> {
    return this.restService.request(
      {
        url: `${this.apiUrl}/save`,
        method: 'POST',
        body: input,
      },
      {
        apiName: this.apiName,
      }
    );
  }
}
