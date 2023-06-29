import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class CharacterDetailPage implements OnInit {

  characterId: string = '';
  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
   }

  ngOnInit() {
  }

   //== Obtener personajes ===
   getCharacter(){

    this.rickAndMortySvc.getCharacterById(this.characterId).subscribe({

      next: (res:any) =>{

      },
      error: (error:any) =>{

      }
    })
}

}
