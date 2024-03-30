import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
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
  selector: "app-modal-nuevo-user",
  standalone: false,
  templateUrl: "./modal-nuevo-user.component.html",
  styleUrl: "./modal-nuevo-user.component.scss",
})
export class ModalNuevoUserComponent implements OnInit, OnDestroy {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetRols = new EventEmitter<boolean>();
  obsNuevo: Subscription;

  rols: Array<RoleDB> = [];
  obsGetRole: Subscription;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private rolsServices: RoleService,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(CenteredContent, {
      centered: true,
    });
    this.getRols();
    this.crearFormulario();
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
          Validators.pattern(
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          ),
        ],
      ],
      telefono: ["", [Validators.required]],
      role: ["", [Validators.required]],
      estado: [true],
    });
  }

  crearUser(): void {
    this.forma.markAllAsTouched();
    if (this.forma.invalid) {
      return;
    }

    const data: userDB = {
      nombre: this.forma.controls.nombre.value,
      apellido: this.forma.controls.apellido.value,
      correo: (this.forma.controls.correo.value as string).toLowerCase().trim(),
      telefono: this.forma.controls.telefono.value,
      role: this.forma.controls.role.value,
      estado: this.forma.controls.estado.value,
    };

    this.obsNuevo = this.userServices.nuevoUsuario(data).subscribe((role) => {
      if (role.ok) {
        // emitir creacion role
        this.emitGetRols.emit(true);
        this.limpiarForma();
        this.modalService.dismissAll();
        Swal.fire({
          title: "Mensaje",
          text: "Usuario creado",
          icon: "info",
        });
      } else {
        console.log("Error");
      }
    });
  }

  limpiarForma(): void {
    this.forma.reset();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
