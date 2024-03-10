"use server";

import {getVerificationTokenByToken} from "@/data/verification-token";
import {getUserByEmail} from "@/data/user";
import prismadb from "@/lib/db";

export const newVerificationToken = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        return {error: "Token does not exist!"};
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return {error: "Token has expired!"};
    }

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return {error: "Email does not exist!"};
    }

    await prismadb.user.update({
        where: {id: existingUser.id},
        data: {
            emailVerified: new Date(),
            email: existingToken.email,
        },
    });

    await prismadb.verificationToken.delete({
        where: {id: existingToken.id},
    });

    return {success: "Email verified!"};
};
