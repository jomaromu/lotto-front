import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { userDB } from "src/app/interfaces/user-interface";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrl: "./usuarios.component.scss",
})
export class UsuariosComponent implements OnInit, OnDestroy {
  obsGet: Subscription;
  users: Array<userDB> = [];
  user: userDB;
  obsEliminar: Subscription;

  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // viene del emit de los modals
  modalUpdateUsers(e: boolean): void {
    if (e) {
      this.getUsers();
    }
  }

  getUsers(): void {
    this.obsGet = this.userServices.obtenerUsuarios().subscribe((users) => {
      if (users.ok) {
        this.users = users.usersDB;
      } else {
        console.log("error");
      }
    });
  }

  eliminarUser(_id: string): void {
    Swal.fire({
      title: "Mensaje",
      text: "¿Desea eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        this.obsEliminar = this.userServices
          .eliminarUser(_id)
          .subscribe((user) => {
            if (user.ok) {
              this.user = user.userDB;

              this.getUsers();
              Swal.fire({
                title: "Mensaje",
                text: "Usuario borrado!!",
                icon: "success",
              });
            } else {
              console.log("error");
            }
          });
      }
    });
  }

  ngOnDestroy(): void {}
}
