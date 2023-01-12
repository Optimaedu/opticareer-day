import { Connection, EntityManager, IDatabaseDriver, MikroORM, RequestContext } from '@mikro-orm/core';
import { NextApiRequest, NextApiResponse } from 'next';
import config from './config';

export declare type DefaultEntityManager = EntityManager<IDatabaseDriver<Connection>>;
export declare type NextMikroOrmApiHandler<T = any> = (req: NextApiRequest, res: NextApiResponse<T>, em: DefaultEntityManager) => unknown | Promise<unknown>;

export const getMikroOrmInstance = async () => {
  // @ts-ignore
  if (!global.__MIKRO_ORM__){
    console.log('Creating Mikro ORM instance.');
    // @ts-ignore
    global.__MIKRO_ORM__ = await MikroORM.init(config);
  }
  // @ts-ignore
  return global.__MIKRO_ORM__ as MikroORM<IDatabaseDriver<Connection>>;
};

export const getEntityManager = () => {
  const em = RequestContext.getEntityManager();
  if (!em) throw new Error("Entity manager not found. Are you in a 'withMikroOrm'-wrapped Context?");
  return em;
}

export const withMikroOrm = (handler: NextMikroOrmApiHandler) => async (req: NextApiRequest, res: NextApiResponse, em: DefaultEntityManager) => {
  const orm = await getMikroOrmInstance();
  return RequestContext.createAsync(orm.em, async () => handler(req, res, getEntityManager()));
}
