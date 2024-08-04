import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private storageKey = 'posts';

  getAll() {
    const storedPosts = localStorage.getItem(this.storageKey);
    if (storedPosts) {
      return JSON.parse(storedPosts) as Post[];
    }
    return [];
  }

  create(post: Post) {
    post.fecha = new Date();
    const currentPosts = this.getAll();
    currentPosts.push(post);
    localStorage.setItem(this.storageKey, JSON.stringify(currentPosts));
  }

  getByCategoria(cat: string) {
    const filteredPosts = this.getAll();
    return filteredPosts.filter(post => post.categoria === cat);
  }

  /*   getById(empleadoId: string) {
      return lastValueFrom(this.httpClient.get<Empleado>(`${this.baseUrl}/${empleadoId}`, this.createHeaders()))
    }
   */
}
