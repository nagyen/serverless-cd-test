import { Get, Controller } from '@nestjs/common';
import { AuthService } from '../../Shared/AuthService';
import { Benefit } from '../../Shared/Business/BenefitService';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Hello from nestjs';
  }

  @Get('test')
	test(): string {
    return 'sub route from nestjs';
  }

  @Get("auth")
  auth(): boolean {
    return new AuthService().IsAuthenticated();
  }
}
