import prismadb from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {
        return await prismadb.twoFactorConfirmation.findUnique({
            where: {
                userId
            }
        });
    } catch {
        return null;
    }
};
