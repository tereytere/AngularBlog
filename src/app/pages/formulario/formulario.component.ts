import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  postsService = inject(PostsService)

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, [
      Validators.required]),
    texto: new FormControl(null, [
      Validators.required]),
    autor: new FormControl(null, [
      Validators.required]),
    imagen: new FormControl(null, [
      Validators.required]),
    categoria: new FormControl(null, [
      Validators.required])
  });

  onSubmit() {
    if (this.formulario.valid) {
      this.postsService.create(this.formulario.value)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post publicado",
      });
      this.formulario.reset();
    }
    console.log(this.formulario.value);
  }


  cambiarClase(fieldName: string, baseClass: string) {
    const control = this.formulario.get(fieldName);
    if (control?.invalid && control.touched) {
      return `${baseClass} is-invalid`;
    } else if (control?.valid && control.touched) {
      return `${baseClass} is-valid`;
    } else {
      return baseClass;
    }
  }
}
