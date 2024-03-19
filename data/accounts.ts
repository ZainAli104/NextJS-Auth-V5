import prismadb from "@/lib/db";

export const getAccountByUserId = async (userId: string) => {
    try {
        return await prismadb.account.findFirst({
            where: {
                userId
            }
        });
    } catch {
        return null;
    }
};
