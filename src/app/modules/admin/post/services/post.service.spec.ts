import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { environment } from '../../../../../environments/environment';

const URI_FRONT_API = `${environment.api.URI_BASE}`;

describe('PostService', () => {
    let service: PostService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(PostService);
        httpMock = TestBed.inject<any>(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get segements', done => {
        const uriBase = `${URI_FRONT_API}/users`;
        const dataMock = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            },
        ];

        service.getUsers().subscribe(data => {
            expect(data).toEqual(dataMock);
            done();
        });

        httpMock.expectOne(`${uriBase}`).flush(dataMock);
    });

    it('should get post by user', done => {
        const uriBase = `${URI_FRONT_API}/users/1/posts`;
        const dataMock = [
            {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            },
            {
                userId: 1,
                id: 2,
                title: 'qui est esse',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
            },
        ];

        service.getPost(1).subscribe(data => {
            expect(data).toEqual(dataMock);
            done();
        });

        httpMock.expectOne(`${uriBase}`).flush(dataMock);
    });

    it('should create post by user', done => {
        const uriBase = `${URI_FRONT_API}/posts`;
        const dataMock = [
            {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            },
        ];

        service.createPost({ title: 'titulo', body: 'test', userId: 1 }).subscribe(data => {
            expect(data).toEqual(dataMock);
            done();
        });

        httpMock.expectOne(`${uriBase}`).flush(dataMock);
    });
});
