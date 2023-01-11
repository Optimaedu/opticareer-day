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
        const em = (await getMikroOrmInstance()).em.fork();
        const user = await em.findOne(User, { username });

        if(!user)
          return null;

        if(await comparePasswordHash(password, user.password) === false)
          return null;

        return {
          id: fromBinaryUUID(user.id),
          name: user.name,
          username: user.username
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);