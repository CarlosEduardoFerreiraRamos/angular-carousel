import { Component, AfterViewInit, ViewChild, Directive, ViewContainerRef, TemplateRef, QueryList, ViewChildren } from '@angular/core';
// import * as jQuery from 'jquery';
declare var $: any;
declare var jQuery: any;

@Directive({selector: `[appDirect]`})
export class AppDirective {
  constructor(public vrc: ViewContainerRef,public t: TemplateRef<any>) {
    this.vrc.createEmbeddedView(t);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'angular-carousel';
  @ViewChild('jcarousel') j: any;
  @ViewChildren(AppDirective) d = new QueryList<AppDirective>();

  ngAfterViewInit() {
    $(document).ready(() => {
      console.log('READY')
    });
    $('h1').click( () => console.log('click'))

    // console.log(this.j.jcarousel)
    // console.log($('.jcarousel'))
    $('.jcarousel').jcarousel({
      wrap: 'circular',
      center: true
    });

    console.log(this.d)
  }

  onMoveRight() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  }

  onMoveLeft() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  }
}
