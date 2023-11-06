import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PostService } from './services/post.service';
import { IUsers } from './interfaces/user.interface';
import { IPost } from './interfaces/post.interface';
import { MatListModule } from '@angular/material/list';
import { CreatePostComponent } from './components/modals/create-post/create-post.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule, MatListModule, MatDialogModule, MatProgressSpinnerModule, NgClass],
})
export class PostComponent implements OnInit{
  dataSource: IUsers[] = []
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: IUsers | null = null;
  userPosts: IPost[] = [];
  userId: number = 0
  loading = false

  constructor(public dialog: MatDialog,private readonly _postService: PostService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this._postService.getUsers().subscribe({
      next: (data) => {
        this.dataSource = data
      },
      error: err => {
        console.log(err)
      }
    })
  }

  canLoaderUserPost(userId: number){
    if(this.expandedElement){
      return
    }

    this.loadUserPosts(userId)
  }

  loadUserPosts(userId: number){
    this.loading = true
    this.userId = userId

    this._postService.getPost(userId).subscribe({
      next: (posts) => {
        this.loading = false
        this.userPosts = posts
      },
      error: err => {
        this.loading = false
        console.log(err)
      }
    })
  }
  openModalCreateUser(): void {
    const dialog = this.dialog.open(CreatePostComponent, {
      data: this.userId,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUserPosts(this.userId)
      }
    });
  }
}
