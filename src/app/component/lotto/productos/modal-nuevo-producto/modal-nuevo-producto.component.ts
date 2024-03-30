import { Component, EventEmitter, Output, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { productDB } from "src/app/interfaces/product-interfaces";
import { ProductsService } from "src/app/services/products.service";
import { simpleAccordion } from "src/app/shared/data/ui-kits/accordion";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-nuevo-producto",
  standalone: false,
  templateUrl: "./modal-nuevo-producto.component.html",
  styleUrl: "./modal-nuevo-producto.component.scss",
})
export class ModalNuevoProductoComponent {
  public simpleAccordionData = simpleAccordion;
  forma: FormGroup;
  @Output() emitGetProducts = new EventEmitter<boolean>();
  obsNuevo: Subscription;

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
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required]],
      precio: [
        "",
        [Validators.required, Validators.pattern("^\\d+(\\.\\d{1,2})?$")],
      ],
      digitos: [
        "",
        [Validators.required, Validators.pattern("^[1-9][0-9]*$")],
      ],
      estado: [true],
    });
  }

  crearProduct(): void {
    // console.log(this.forma);

    this.forma.markAllAsTouched();
    if (this.forma.invalid) {
      return;
    }

    const data: productDB = {
      nombre: this.forma.controls.nombre.value,
      precio: this.forma.controls.precio.value,
      digitos: this.forma.controls.digitos.value,
      estado: this.forma.controls.estado.value,
    };

    this.obsNuevo = this.productServices
      .nuevoProducto(data)
      .subscribe((product) => {
        if (product.ok) {
          // emitir creacion product
          this.emitGetProducts.emit(true);
          this.limpiarForma();
          this.modalService.dismissAll();
          Swal.fire({
            title: "Mensaje",
            text: "Producto creado",
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
}
