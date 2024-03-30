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
import { productDB } from "src/app/interfaces/product-interfaces";
import { ProductsService } from "src/app/services/products.service";
import { simpleAccordion } from "src/app/shared/data/ui-kits/accordion";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-editar-producto",
  standalone: false,
  templateUrl: "./modal-editar-producto.component.html",
  styleUrl: "./modal-editar-producto.component.scss",
})
export class ModalEditarProductoComponent {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetProducts = new EventEmitter<boolean>();
  @Input() _id: string;

  obsGet: Subscription;
  obsEditar: Subscription;

  constructor(
    private modalService: NgbModal,
    private productServices: ProductsService,
    private fb: FormBuilder
  ) {}

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
      precio: [
        "",
        [Validators.required, Validators.pattern("^\\d+(\\.\\d{1,2})?$")],
      ],
      digitos: ["", [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      estado: [true],
    });
  }

  cargarDatosIniciales(): void {
    this.obsGet = this.productServices
      .obtenerProducto(this._id)
      .subscribe((product) => {
        // console.log(product);

        if (product.ok) {
          this.forma.controls.nombre.setValue(product?.productDB?.nombre);
          this.forma.controls.precio.setValue(product?.productDB?.precio);
          this.forma.controls.digitos.setValue(product?.productDB?.digitos);
          this.forma.controls.estado.setValue(product?.productDB?.estado);
        }
      });
  }

  crearProduct(): void {
    this.forma.markAllAsTouched();
    if (!this.forma.valid) {
      return;
    }
    const data: productDB = {
      _id: this._id,
      nombre: this.forma.controls.nombre.value,
      precio: this.forma.controls.precio.value,
      digitos: this.forma.controls.digitos.value,
      estado: this.forma.controls.estado.value,
    };
    this.obsEditar = this.productServices
      .editarProducto(data)
      .subscribe((product) => {
        if (product.ok) {
          // emitir creacion product
          this.emitGetProducts.emit(true);
          this.modalService.dismissAll();
          Swal.fire({
            title: "Mensaje",
            text: "Producto editado",
            icon: "info",
          });
        } else {
          console.log("Error");
        }
      });
  }

  ngOnDestroy(): void {}
}
