/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createCartRouter from "./Cart.router";
import createCartItemRouter from "./CartItem.router";
import createServiceProviderRouter from "./ServiceProvider.router";
import createServiceProviderImageRouter from "./ServiceProviderImage.router";
import createPaymentRouter from "./Payment.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as CartClientType } from "./Cart.router";
import { ClientType as CartItemClientType } from "./CartItem.router";
import { ClientType as ServiceProviderClientType } from "./ServiceProvider.router";
import { ClientType as ServiceProviderImageClientType } from "./ServiceProviderImage.router";
import { ClientType as PaymentClientType } from "./Payment.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        cart: createCartRouter(router, procedure),
        cartItem: createCartItemRouter(router, procedure),
        serviceProvider: createServiceProviderRouter(router, procedure),
        serviceProviderImage: createServiceProviderImageRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    cart: CartClientType<AppRouter>;
    cartItem: CartItemClientType<AppRouter>;
    serviceProvider: ServiceProviderClientType<AppRouter>;
    serviceProviderImage: ServiceProviderImageClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
}
