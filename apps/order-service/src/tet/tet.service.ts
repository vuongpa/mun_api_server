import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TetServiceBase } from "./base/tet.service.base";

@Injectable()
export class TetService extends TetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
