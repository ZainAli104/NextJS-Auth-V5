"use client";

import React from "react";
import {UserRole} from "@prisma/client";

import {useCurrentRole} from "@/hooks/use-current-role";
import {FormError} from "@/components/form-error";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRoles: UserRole;
}

export const RoleGate = ({children, allowedRoles}: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowedRoles) {
        return (
            <FormError message="You don't have permission to view this content!" />
        );
    }

    return <>{children}</>;
};
