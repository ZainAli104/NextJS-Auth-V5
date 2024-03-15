"use client";

import {logout} from "@/actions/logout";
import {useCurrentUser} from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();

    const handleSignOut = () => {
        logout();
    };

    return (
        <div className="bg-white p-10 rounded-xl">
            <form>
                <button type="submit" className="p-3" onClick={handleSignOut}>
                    Sign Out
                </button>
            </form>
        </div>
    );
};

export default SettingsPage;
