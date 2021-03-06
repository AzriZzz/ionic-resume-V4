import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DataResolverService } from "./resolver/data-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "experience",
    loadChildren: () =>
      import("./experience/experience.module").then(m => m.ExperiencePageModule)
  },
  {
    path: "experience/occupation/:id",
    resolve: {
      object: DataResolverService
    },
    loadChildren: () =>
      import("./occupation/occupation.module").then(m => m.OccupationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
