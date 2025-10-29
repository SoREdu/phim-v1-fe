import { Types } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Region')
export class RegionType {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field()
    name: string;

    @Field()
    slug: string;

    @Field(() => Date)
    createdAt?: Date;

    @Field(() => Date)
    updatedAt?: Date;
}
