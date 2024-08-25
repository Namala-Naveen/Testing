/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ServiceProviderImageInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.createMany(input as any))),

        create: procedure.input($Schema.ServiceProviderImageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.create(input as any))),

        deleteMany: procedure.input($Schema.ServiceProviderImageInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.deleteMany(input as any))),

        delete: procedure.input($Schema.ServiceProviderImageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.delete(input as any))),

        findFirst: procedure.input($Schema.ServiceProviderImageInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).serviceProviderImage.findFirst(input as any))),

        findMany: procedure.input($Schema.ServiceProviderImageInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).serviceProviderImage.findMany(input as any))),

        findUnique: procedure.input($Schema.ServiceProviderImageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).serviceProviderImage.findUnique(input as any))),

        updateMany: procedure.input($Schema.ServiceProviderImageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.updateMany(input as any))),

        update: procedure.input($Schema.ServiceProviderImageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProviderImage.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ServiceProviderImageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ServiceProviderImageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderImageGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderImageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ServiceProviderImageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ServiceProviderImageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderImageGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderImageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ServiceProviderImageFindFirstArgs, TData = Prisma.ServiceProviderImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ServiceProviderImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderImageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ServiceProviderImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ServiceProviderImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ServiceProviderImageFindManyArgs, TData = Array<Prisma.ServiceProviderImageGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ServiceProviderImageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderImageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ServiceProviderImageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ServiceProviderImageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ServiceProviderImageFindUniqueArgs, TData = Prisma.ServiceProviderImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ServiceProviderImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderImageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderImageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ServiceProviderImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ServiceProviderImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ServiceProviderImageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ServiceProviderImageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderImageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderImageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderImageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderImageGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderImageGetPayload<T>>
            };

    };
}
