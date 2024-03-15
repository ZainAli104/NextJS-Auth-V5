import prismadb from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        return await prismadb.twoFactorToken.findUnique({
            where: {
                token
            }
        });
    } catch {
        return null;
    }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
    try {
        return await prismadb.twoFactorToken.findFirst({
            where: {
                email
            }
        });
    } catch {
        return null;
    }
};
