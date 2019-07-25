import { Component, AfterViewInit, ViewChild } from '@angular/core';
// import * as jQuery from 'jquery';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-carousel';
  @ViewChild('jcarousel') j: any;

  ngAfterViewInit() {
    $(document).ready(() => {
      console.log('READY')
    });
    $('h1').click( () => console.log('click'))

    // console.log(this.j.jcarousel)
    // console.log($('.jcarousel'))
    $('.jcarousel').jcarousel({
    //     // Configuration goes here
    });
  }

  onMoveRight() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  }

  onMoveLeft() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  }
}
