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
import { TetWhereInput } from "./TetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TetOrderByInput } from "./TetOrderByInput";

@ArgsType()
class TetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TetWhereInput, { nullable: true })
  @Type(() => TetWhereInput)
  where?: TetWhereInput;

  @ApiProperty({
    required: false,
    type: [TetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TetOrderByInput], { nullable: true })
  @Type(() => TetOrderByInput)
  orderBy?: Array<TetOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TetFindManyArgs as TetFindManyArgs };
