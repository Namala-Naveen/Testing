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

        createMany: procedure.input($Schema.ServiceProviderInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.createMany(input as any))),

        create: procedure.input($Schema.ServiceProviderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.create(input as any))),

        deleteMany: procedure.input($Schema.ServiceProviderInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.deleteMany(input as any))),

        delete: procedure.input($Schema.ServiceProviderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.delete(input as any))),

        findFirst: procedure.input($Schema.ServiceProviderInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).serviceProvider.findFirst(input as any))),

        findMany: procedure.input($Schema.ServiceProviderInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).serviceProvider.findMany(input as any))),

        findUnique: procedure.input($Schema.ServiceProviderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).serviceProvider.findUnique(input as any))),

        updateMany: procedure.input($Schema.ServiceProviderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.updateMany(input as any))),

        update: procedure.input($Schema.ServiceProviderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).serviceProvider.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ServiceProviderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ServiceProviderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ServiceProviderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ServiceProviderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ServiceProviderFindFirstArgs, TData = Prisma.ServiceProviderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ServiceProviderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ServiceProviderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ServiceProviderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ServiceProviderFindManyArgs, TData = Array<Prisma.ServiceProviderGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ServiceProviderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ServiceProviderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ServiceProviderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ServiceProviderFindUniqueArgs, TData = Prisma.ServiceProviderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ServiceProviderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ServiceProviderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ServiceProviderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ServiceProviderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ServiceProviderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ServiceProviderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ServiceProviderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ServiceProviderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ServiceProviderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ServiceProviderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ServiceProviderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ServiceProviderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ServiceProviderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ServiceProviderGetPayload<T>, Context>) => Promise<Prisma.ServiceProviderGetPayload<T>>
            };

    };
}
