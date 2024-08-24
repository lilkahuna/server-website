import { Body, Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  getData(@Body() body: any) {
    return body;
  }
}
