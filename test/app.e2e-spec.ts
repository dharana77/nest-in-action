import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
let app: INestApplication;

<<<<<<< HEAD
beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
  )
  await app.init();
});

it('/ (GET)', () => {
  return request(app.getHttpServer())
  .get('/')
  .expect(200)
  .expect('Hello World!');
});

describe("/movies", ()=>{
  it("/movies (GET)", ()=>{
    return request(app.getHttpServer())
    .get("/movies")
    .expect(200)
    .expect([]);
=======
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
        new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    await app.init();
>>>>>>> 8657b24b61ee52cc9d9673ab72d005878d176827
  });

  it('POST', ()=>{
    return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test',
        year:2000,
        genres: ['test'],
      })
      .expect(201);
  });

<<<<<<< HEAD
  it('POST', ()=>{
    return request(app.getHttpServer())
=======
  describe("/movies", ()=>{
    it("/movies (GET)", ()=>{
      return request(app.getHttpServer())
      .get("/movies")
      .expect(200)
      .expect([]);
    });

    it('POST', ()=>{
      return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test',
        year:2000,
        genres: ['test'],
      })
      .expect(201);
    });

    it('POST', ()=>{
      return request(app.getHttpServer())
>>>>>>> 8657b24b61ee52cc9d9673ab72d005878d176827
      .post('/movies')
      .send({
        title: 'Test',
        year:2000,
        genres: ['test'],
        other:' thina',
      })
      .expect(400);
    });

<<<<<<< HEAD
  it("DELETE", ()=>{
    return request(app.getHttpServer())
    .delete('movies')
    .expect(404);
  })
=======
    it("DELETE", ()=>{
      return request(app.getHttpServer())
      .delete('movies').
      expect(404);
    })
  });
  
  desribe('/movies/:id', ()=>{
    it("GET 200", ()=>{
      return request(app.getHttpServer())
      .get('/movies/1')
      .expect(200);
    });

    it('GET 404', ()=>{
      return request(app.getHttpServer())
      .get('/movies/999')
      .expect(404);
    });

    it('PATCH', ()=>{
      return request(app.getHttpServer())
      .patch('/movies/1')
      .send({title: 'Updated Test'})
      .expect(201);
    });

    it('DELETE', ()=>{
      return request(app.getHttpServer())
      .delete('/movies/1')
      .expect(200);
    });
    it.todo("PATCH");
  });

>>>>>>> 8657b24b61ee52cc9d9673ab72d005878d176827
});

describe('/movies/:id', ()=>{
  it("GET 200", ()=>{
    return request(app.getHttpServer())
    .get('/movies/1')
    .expect(200);
  });

  it('GET 404', ()=>{
    return request(app.getHttpServer())
    .get('/movies/999')
    .expect(404);
  });

  it('PATCH', ()=>{
    return request(app.getHttpServer())
    .patch('/movies/1')
    .send({title: 'Updated Test'})
    .expect(201);
  });

  it('DELETE', ()=>{
    return request(app.getHttpServer())
    .delete('/movies/1')
    .expect(200);
    });
    it.todo("PATCH");
  });});