import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'single-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

  @Input() post: Post | null = null;
  postsService = inject(PostsService);

  private categoriaMap: { [key: string]: string } = {
    thriller: "Novela negra, thriller o suspense",
    historic: "Novela histórica",
    romantic: "Romántica",
    "sci-fi": "Ciencia ficción",
    dystopian: "Distopía",
    adventure: "Aventuras",
    fantasy: "Fantasía",
    contemporary: "Contemporáneo",
    terror: "Terror",
    paranormal: "Paranormal",
    poetry: "Poesía",
    youth: "Juvenil",
    children: "Infantil",
    personal: "Autoayuda y superación personal",
    health: "Salud y deporte",
    manual: "Libros prácticos o manuales",
    memoires: "Memorias",
    biographies: "Biografías",
    cooking: "Cocina",
    travel: "Viajes",
    technical: "Libros técnicos y especializados",
    reference: "De consulta y referencia",
    divulgatory: "Divulgativos",
    textbook: "Libros de texto",
    art: "Arte"
  };

  getCategoriaText(value: string): string {
    return this.categoriaMap[value] || value;
  }
}
