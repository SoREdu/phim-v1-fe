import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType('Category')
export class CategoryType {
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
