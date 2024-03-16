import {useSession} from "next-auth/react";

// for client components
export const useCurrentUser = () => {
    const session = useSession();

    return session.data?.user;
};
