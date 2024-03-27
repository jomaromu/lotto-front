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
import { RoleService } from "src/app/services/role.service";
import { simpleAccordion } from "src/app/shared/data/ui-kits/accordion";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-nuevo-role",
  standalone: false,
  templateUrl: "./modal-nuevo-role.component.html",
  styleUrl: "./modal-nuevo-role.component.scss",
})
export class ModalNuevoRoleComponent implements OnInit, OnDestroy {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetRols = new EventEmitter<boolean>();
  obsNuevo: Subscription;

  constructor(
    private modalService: NgbModal,
    private rolsServices: RoleService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(CenteredContent, {
      centered: true,
    });
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required]],
      verDashboard: [false],
      verListas: [false],
      verMatrices: [false],
      verUsuarios: [false],
      verRoles: [false],
      verProductos: [false],

      verPropias: [false],
      verFiltros: [false],
      crearListas: [false],
      verListasPanel: [false],
      eliminarListas: [false],

      vendedor: [false],
      estado: [true],
    });
  }

  crearRole(): void {
    this.forma.markAllAsTouched();
    if (!this.forma.valid) {
      return;
    }

    const data: RoleDB = {
      nombre: this.forma.controls.nombre.value,
      estado: this.forma.controls.estado.value,
      vendedor: this.forma.controls.vendedor.value,

      restricciones: {
        sidebar: {
          dashboard: this.forma.controls.verDashboard.value,
          listas: this.forma.controls.verListas.value,
          matrices: this.forma.controls.verMatrices.value,
          usuarios: this.forma.controls.verUsuarios.value,
          roles: this.forma.controls.verRoles.value,
          productos: this.forma.controls.verProductos.value,
        },
        listas: {
          verPropias: this.forma.controls.verPropias.value,
          verFiltros: this.forma.controls.verFiltros.value,
          crearListas: this.forma.controls.crearListas.value,
          verListas: this.forma.controls.verListasPanel.value,
          eliminarListas: this.forma.controls.eliminarListas.value,
        },
      },
    };

    this.obsNuevo = this.rolsServices.nuevoRole(data).subscribe((role) => {
      if (role.ok) {
        // emitir creacion role
        this.emitGetRols.emit(true);
        this.limpiarForma();
        this.modalService.dismissAll();
        Swal.fire({
          title: "Mensaje",
          text: "Role creado",
          icon: "info",
        });
      } else {
        console.log("Error");
      }
    });
  }

  limpiarForma(): void {
    this.forma.controls.nombre.reset();
  }

  ngOnDestroy(): void {
    if (this.obsNuevo) {
      this.obsNuevo.unsubscribe();
    }
  }
}
