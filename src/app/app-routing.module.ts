import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPatientsComponent } from './patients/edit-patients/edit-patients.component';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';
import { ScheduleMonthComponent } from './schedules/schedules-month/schedule-month.component';

const routes: Routes = [
  {path: 'patients/edit-patient/:id', component: EditPatientsComponent, data:{title:'Atualizar paciente'}},
  {path: 'patients/new-patient', component: NewPatientComponent, data:{title:'Cadastrar paciente'}},
  {path: 'patients/list', component: ListPatientsComponent, data:{title:'Pacientes cadastrados'}},
  {path: 'schedules/month', component: ScheduleMonthComponent, data:{title:'Agendamentos'}},
  {path: '**', redirectTo: 'schedules/month'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
