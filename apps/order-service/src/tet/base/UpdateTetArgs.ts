/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TetWhereUniqueInput } from "./TetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TetUpdateInput } from "./TetUpdateInput";

@ArgsType()
class UpdateTetArgs {
  @ApiProperty({
    required: true,
    type: () => TetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TetWhereUniqueInput)
  @Field(() => TetWhereUniqueInput, { nullable: false })
  where!: TetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TetUpdateInput,
  })
  @ValidateNested()
  @Type(() => TetUpdateInput)
  @Field(() => TetUpdateInput, { nullable: false })
  data!: TetUpdateInput;
}

export { UpdateTetArgs as UpdateTetArgs };
