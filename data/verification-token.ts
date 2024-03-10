import prismadb from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
    try {
        return await prismadb.verificationToken.findUnique({
            where: { token }
        });
    } catch (error) {
        return null;
    }
};

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        return await prismadb.verificationToken.findFirst({
            where: { email }
        });
    } catch (error) {
        return null;
    }
};
