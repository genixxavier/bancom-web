import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { environment } from 'src/environments/environment';

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
        const uriBase = `${URI_FRONT_API}/segments?page=0&page-size=10`;
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
});
