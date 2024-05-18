import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { finalize, tap } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';


export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.showLoading();


  return next(req).pipe(
    finalize(() => {
      loadingService.hideLoading(); // Hide loading spinner UI element

    })
  );


};



