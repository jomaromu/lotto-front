import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { RoleDB } from "src/app/interfaces/role-interface";
import { RoleService } from "src/app/services/role.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-roles",
  templateUrl: "./roles.component.html",
  styleUrl: "./roles.component.scss",
})
export class RolesComponent implements OnInit, OnDestroy {
  rols: Array<RoleDB>;
  obsEliminar: Subscription;
  obsGet: Subscription;

  constructor(private rolsServices: RoleService) {}

  ngOnInit(): void {
    this.getRols();
  }

  // viene del emit del modal-nuevo-role
  modalUpdateRols(e: boolean): void {
    if (e) {
      this.getRols();
    }
  }

  getRols(): void {
    this.obsGet = this.rolsServices.obtenerRoles().subscribe((rols) => {
      if (rols.ok) {
        this.rols = rols.rolesDB;
        // console.log(this.rols);
      } else {
        console.log("error");
      }
    });
  }

  eliminarRole(_id: string): void {
    Swal.fire({
      title: "Mensaje",
      text: "¿Desea eliminar este role?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        this.obsEliminar = this.rolsServices
          .eliminarRole(_id)
          .subscribe((rols) => {
            if (rols.ok) {
              this.rols = rols.rolesDB;

              this.getRols();
              Swal.fire({
                title: "Mensaje",
                text: "Role borrado!!",
                icon: "success",
              });
            } else {
              console.log("error");
            }
          });
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.obsGet) {
      this.obsGet.unsubscribe();
    }
    if (this.obsEliminar) {
      this.obsEliminar.unsubscribe();
    }
  }
}
