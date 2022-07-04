import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGaurd } from './jwt-auth.guard';
import { LocalAuthGaurd } from './local-auth.gaurd';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //login
  @UseGuards(LocalAuthGaurd)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // protected
  @UseGuards(JwtAuthGaurd)
  @Get('movie_list')
  getMovieList(): object {
    return {
      data: [
        {
          title: 'Spider-Man: No Way Home',
          releaseDate: 'December 17, 2021',
          imageUrl: 'https://www.marvel.com/movies/spider-man-no-way-home',
          description:
            "Movie Description: Peter Parker seeks Doctor Strange's help to makepeople forget about Spiderman's identity. However, when the spell hecasts gets corrupted, several unwanted guests enter their universe.",
        },
        {
          title: 'Top Gun: Maverick',
          releaseDate: 'May 27, 2022',
          imageUrl: 'https://en.wikipedia.org/wiki/Top_Gun:_Maverick',
          description:
            " After more than 30 years of service as one of the Navy's top aviators, Pete Maverick Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.",
        },
      ],
    };
  }
}
