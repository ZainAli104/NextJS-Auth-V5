import prismadb from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        return await prismadb.passwordResetToken.findUnique({
            where: { token }
        });
    } catch {
        return null;
    }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        return await prismadb.passwordResetToken.findFirst({
            where: { email }
        });
    } catch {
        return null;
    }
};
