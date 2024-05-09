/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TetWhereInput } from "./TetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TetWhereInput,
  })
  @ValidateNested()
  @Type(() => TetWhereInput)
  @IsOptional()
  @Field(() => TetWhereInput, {
    nullable: true,
  })
  every?: TetWhereInput;

  @ApiProperty({
    required: false,
    type: () => TetWhereInput,
  })
  @ValidateNested()
  @Type(() => TetWhereInput)
  @IsOptional()
  @Field(() => TetWhereInput, {
    nullable: true,
  })
  some?: TetWhereInput;

  @ApiProperty({
    required: false,
    type: () => TetWhereInput,
  })
  @ValidateNested()
  @Type(() => TetWhereInput)
  @IsOptional()
  @Field(() => TetWhereInput, {
    nullable: true,
  })
  none?: TetWhereInput;
}
export { TetListRelationFilter as TetListRelationFilter };
