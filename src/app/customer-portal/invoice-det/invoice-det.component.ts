import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SharedServiceService } from "../../service/shared-service.service";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import {Element} from "@angular/compiler";

@Component({
  selector: 'app-invoice-det',
  templateUrl: './invoice-det.component.html',
  styleUrls: ['./invoice-det.component.css']
})
export class InvoiceDetComponent implements OnInit {

  @ViewChild('content',{static:false}) el!:ElementRef;

  data:any;
  list_h:any;
  list_i:any;
  user:any;
  constructor(private service: SharedServiceService ) {
    // this.service.getJSONData().subscribe(data=>{
    //   console.log(data); //<-- data is here
    //   if(sessionStorage.getItem('data')===null){
    //     sessionStorage.setItem('data',JSON.stringify(data));
    //   }
    // });
  }

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem('data'));
    this.user = JSON.parse(localStorage.getItem('userDetails'));

    this.list_h = this.data.HEAD;
    this.list_i = this.data.ITEM;
    console.log(this.list_h,this.list_i);
    //console.log(this.user);
  }

  pdf(){
    const DATA = this.el.nativeElement;
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 300;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('landscape', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      // var doc = PDF.output();
      // var url = 'data:application/pdf;base64,' + btoa(doc);
      // var iframe = "<iframe width='100%' height='100%' src='" + url + "'></iframe>"
      // var x = window.open();
      // x.document.open();
      // x.document.write(iframe);
      // x.document.close();
      // document.location.href = url;
      PDF.save('invoice');
    });
    // const doc: jsPDF = new jsPDF("p", "mm", "a4");
    //  doc.html(DATA, {
    //   callback: (doc) => {
    //     doc.output("dataurlnewwindow");
    //   }
    // });
    }

    toInt(val1,val2){
      return parseFloat(val1)+parseFloat(val2);
    }

}
