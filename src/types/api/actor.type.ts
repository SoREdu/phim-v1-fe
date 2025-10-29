import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType('Actor')
export class ActorType {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field()
    name: string;

    @Field()
    originalName: string;

    @Field({ nullable: true })
    tmdbPersonId?: number;

    @Field()
    slug: string;

    @Field({ nullable: true })
    content?: string;

    @Field({ nullable: true })
    thumbUrl?: string;

    @Field({ nullable: true })
    posterUrl?: string;

    @Field(() => Date)
    createdAt?: Date;

    @Field(() => Date)
    updatedAt?: Date;
}
