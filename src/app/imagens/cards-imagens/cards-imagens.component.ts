import { Component, OnInit } from '@angular/core';
import { Imagem } from '../imagem';
import { ImagemService } from '../imagem.service';

@Component({
  selector: 'app-cards-imagens',
  templateUrl: './cards-imagens.component.html'
})
export class CardsImagensComponent implements OnInit {

  constructor(private imagemService: ImagemService) { }

  public imagens: Imagem[];

  ngOnInit() {
    this.imagemService.getImages()
      .subscribe(
        imagens => {
          this.imagens = imagens;
          console.log(imagens);
        },
        error => console.log(error)
      );
  }

}
