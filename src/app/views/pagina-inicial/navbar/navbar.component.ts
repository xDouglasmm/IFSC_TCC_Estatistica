import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'ifmath-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  public titulo: string;
  public color = '#359d6e ';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {

    // subscribe to the NavigationEnd event
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // set breadcrumbs
        const root: ActivatedRoute = this.activatedRoute.root;
        this.getBreadcrumb(root);
      }
    });

    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart) {
        if(event.url.search('geometria') === -1) {
          this.color = '#359d6e';
        } else {
          this.color = '#4683b4';
        }
      }
    });
  }

  private getBreadcrumb(route: ActivatedRoute): void {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumbOptions';
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      this.titulo = '';
      return;
    }

    const child = children[children.length - 1];

    const breadcrumbOptions = child.snapshot.data[ROUTE_DATA_BREADCRUMB];

    if (breadcrumbOptions) {
      this.titulo = breadcrumbOptions.breadcrumbLabel;
      this.color = breadcrumbOptions.params.color;
    } else {
      this.titulo = '';
    }
  }

}
