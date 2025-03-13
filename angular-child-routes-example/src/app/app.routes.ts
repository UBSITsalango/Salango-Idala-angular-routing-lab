import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
export const routes: Routes = [
{
path: 'parent',
component: ParentComponent,
children: [
{
path: 'child-one',
component: ChildOneComponent
},
{
path: 'child-two',
component: ChildTwoComponent
},
{
path: '',
redirectTo: 'child-one',
pathMatch: 'full'
}
]
},
{
path: '',

redirectTo: '/parent',
pathMatch: 'full'
}
];