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
import { RoleService } from "src/app/services/role.service";
import { simpleAccordion } from "src/app/shared/data/ui-kits/accordion";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-editar-role",
  standalone: false,
  templateUrl: "./modal-editar-role.component.html",
  styleUrl: "./modal-editar-role.component.scss",
})
export class ModalEditarRoleComponent {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetRols = new EventEmitter<boolean>();
  @Input() _id: string;

  obsGet: Subscription;
  obsEditar: Subscription;

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
    this.cargarDatosIniciales();
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

  cargarDatosIniciales(): void {
    this.obsGet = this.rolsServices.obtenerRole(this._id).subscribe((role) => {
      if (role.ok) {
        this.forma.controls.nombre.setValue(role?.roleDB?.nombre);
        this.forma.controls.estado.setValue(role?.roleDB?.estado);
        this.forma.controls.vendedor.setValue(role?.roleDB?.vendedor);

        this.forma.controls.verDashboard.setValue(
          role?.roleDB?.restricciones?.sidebar?.dashboard
        );
        this.forma.controls.verListas.setValue(
          role?.roleDB?.restricciones?.sidebar?.listas
        );
        this.forma.controls.verMatrices.setValue(
          role?.roleDB?.restricciones?.sidebar?.matrices
        );
        this.forma.controls.verUsuarios.setValue(
          role?.roleDB?.restricciones?.sidebar?.usuarios
        );
        this.forma.controls.verRoles.setValue(
          role?.roleDB?.restricciones?.sidebar?.roles
        );
        this.forma.controls.verProductos.setValue(
          role?.roleDB?.restricciones?.sidebar?.productos
        );

        this.forma.controls.verPropias.setValue(
          role?.roleDB?.restricciones?.listas?.verPropias
        );
        this.forma.controls.verFiltros.setValue(
          role?.roleDB?.restricciones?.listas?.verFiltros
        );
        this.forma.controls.crearListas.setValue(
          role?.roleDB?.restricciones?.listas?.crearListas
        );
        this.forma.controls.verListasPanel.setValue(
          role?.roleDB?.restricciones?.listas?.verListas
        );
        this.forma.controls.eliminarListas.setValue(
          role?.roleDB?.restricciones?.listas?.eliminarListas
        );
      }
    });
  }

  editarRole(): void {
    this.forma.markAllAsTouched();
    if (!this.forma.valid) {
      return;
    }
    const data: RoleDB = {
      nombre: this.forma.controls.nombre.value,
      estado: this.forma.controls.estado.value,
      vendedor: this.forma.controls.vendedor.value,
      _id: this._id,
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
    this.obsEditar = this.rolsServices.editarRole(data).subscribe((role) => {
      if (role.ok) {
        // emitir creacion role
        this.emitGetRols.emit(true);
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

  ngOnDestroy(): void {
    if (this.obsGet) {
      this.obsGet.unsubscribe();
    }

    if (this.obsEditar) {
      this.obsEditar.unsubscribe();
    }
  }
}
