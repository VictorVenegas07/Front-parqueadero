import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HandleErrorsComponent } from '../components/modals/handle-errors/handle-errors.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { PipeModule } from '../pages/pipe/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../interceptors/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
  ],
  exports:[
    PipeModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule, // required animations module
    ToastrModule ,
    FormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgChartsModule,
    ToastrModule, 
    MatAutocompleteModule,
    MatTooltipModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent],

})
export class SharedModuleModule { }
