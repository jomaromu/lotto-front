import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { RoleDB } from "src/app/interfaces/role-interface";
import { userDB } from "src/app/interfaces/user-interface";
import { RoleService } from "src/app/services/role.service";
import { UserService } from "src/app/services/user.service";
import { simpleAccordion } from "src/app/shared/data/ui-kits/accordion";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-editar-user",
  standalone: false,
  templateUrl: "./modal-editar-user.component.html",
  styleUrl: "./modal-editar-user.component.scss",
})
export class ModalEditarUserComponent {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetUsers = new EventEmitter<boolean>();
  @Input() _id: string;
  rols: Array<RoleDB> = [];
  obsGetRole: Subscription;

  obsGet: Subscription;
  obsEditar: Subscription;

  constructor(
    private modalService: NgbModal,
    private userServices: UserService,
    private fb: FormBuilder,
    private rolsServices: RoleService
  ) {}

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(CenteredContent, {
      centered: true,
    });
    this.crearFormulario();
    this.getRols();
    this.cargarDatosIniciales();
  }

  getRols(): void {
    this.obsGetRole = this.rolsServices.obtenerRoles().subscribe((rols) => {
      if (rols.ok) {
        this.rols = rols.rolesDB;
        // console.log(this.rols);
      } else {
        console.log("error");
      }
    });
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      correo: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),
        ],
      ],
      telefono: ["", [Validators.required]],
      role: ["", [Validators.required]],
      estado: [true],
    });
  }

  cargarDatosIniciales(): void {
    this.obsGet = this.userServices
      .obtenerUsuario(this._id)
      .subscribe((user) => {
        if (user.ok) {
          this.forma.controls.nombre.setValue(user?.userDB?.nombre);
          this.forma.controls.apellido.setValue(user?.userDB?.apellido);
          this.forma.controls.correo.setValue(user?.userDB?.correo);
          this.forma.controls.correo.disable();
          this.forma.controls.telefono.setValue(user?.userDB?.telefono);
          this.forma.controls.role.setValue(user?.userDB?.role?._id);
          this.forma.controls.estado.setValue(user?.userDB?.estado);
        }
      });
  }

  editarUsuario(): void {
    this.forma.markAllAsTouched();
    if (!this.forma.valid) {
      return;
    }

    const data: userDB = {
      nombre: this.forma.controls.nombre.value,
      apellido: this.forma.controls.apellido.value,
      correo: (this.forma.controls.correo.value as string).toLowerCase().trim(),
      telefono: this.forma.controls.telefono.value,
      role: this.forma.controls.role.value,
      estado: this.forma.controls.estado.value,
      _id: this._id,
    };

    this.obsEditar = this.userServices.editarUsuario(data).subscribe((user) => {
      if (user.ok) {
        // emitir creacion user
        this.emitGetUsers.emit(true);
        this.modalService.dismissAll();
        Swal.fire({
          title: "Mensaje",
          text: "Role editado",
          icon: "info",
        });
      } else {
        console.log("Error");
      }
    });
  }
}
