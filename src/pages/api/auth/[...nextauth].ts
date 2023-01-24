import { RequestContext } from '@mikro-orm/core';
import { fromBinaryUUID } from 'binary-uuid';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { getMikroOrmInstance } from '../../../core/mikro-orm/server';
import User from '../../../core/mikro-orm/shared/entities/User';
import { comparePasswordHash } from '../../../core/utils/server/password';

type CredentialsInputType = {
  username: string,
  password: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { },
      async authorize(credentials, req) {
        const {username, password} = credentials as CredentialsInputType;
        const orm = await getMikroOrmInstance();
        
        RequestContext.create(orm.em, async () => {

        });
        const em = orm.em.fork();
        const user = await em.findOne(User, { username });

        if(!user)
          return null;

        if(await comparePasswordHash(password, user.password) === false)
          return null;

        return {
          id: user.id,
          name: user.name,
          username: user.username
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.id;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);