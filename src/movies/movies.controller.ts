import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll(){
        return '모든 영화 반환';
    }
    
    @Get('search')
    search(@Query("year") searchingYear: string){
        return `특정 연도 이후로 영화찾기: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string){
        return `영화 한개 반환 ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return `무비 삭제 ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData){
        return{
            updatedMovieData: movieId,
            ...updateData,
        }    
    };

    
}
