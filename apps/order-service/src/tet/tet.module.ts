import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TetModuleBase } from "./base/tet.module.base";
import { TetService } from "./tet.service";
import { TetController } from "./tet.controller";
import { TetResolver } from "./tet.resolver";

@Module({
  imports: [TetModuleBase, forwardRef(() => AuthModule)],
  controllers: [TetController],
  providers: [TetService, TetResolver],
  exports: [TetService],
})
export class TetModule {}
