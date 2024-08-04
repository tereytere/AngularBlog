import { Component, inject } from '@angular/core';
import { SinglePostComponent } from "../../components/single-post/single-post.component";
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [SinglePostComponent],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  postsService = inject(PostsService);
  route = inject(ActivatedRoute);
  postsArr: Post[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const categoria = params['categoria'];
      if (categoria) {
        this.postsArr = this.postsService.getByCategoria(categoria);
      } else {
        this.postsArr = this.postsService.getAll();
      }
    });
  }

}
