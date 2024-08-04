import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  postsService = inject(PostsService);
  router = inject(Router);

  onClick($event: Event) {
    const selectedValue = ($event.target as HTMLSelectElement).value;
    this.router.navigate(['/posts'], { queryParams: { categoria: selectedValue } });
  }
}
