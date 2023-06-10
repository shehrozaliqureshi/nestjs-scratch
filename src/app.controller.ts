import { Controller, Get } from "@nestjs/common";

@Controller("/get")
export class AppController {

    @Get("/asdf")
    getRootRoute() {
        return 'hi there!';
    }

    @Get("/bye")
    getByeThere() {
        return 'bye there!';
    }

}
