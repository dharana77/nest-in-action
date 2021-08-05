import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(){
        return this.moviesService.getAll();
    }
    
    @Get('search')
    search(@Query("year") searchingYear: string){
        return `특정 연도 이후로 영화찾기: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData){
        return{
            updatedMovieData: movieId,
            ...updateData,
        }    
    };

    
}
