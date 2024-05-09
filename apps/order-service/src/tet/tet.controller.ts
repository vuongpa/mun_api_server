import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TetService } from "./tet.service";
import { TetControllerBase } from "./base/tet.controller.base";

@swagger.ApiTags("tets")
@common.Controller("tets")
export class TetController extends TetControllerBase {
  constructor(
    protected readonly service: TetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
