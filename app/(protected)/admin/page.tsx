"use client";

import {toast} from "sonner";
import {UserRole} from "@prisma/client";

import {RoleGate} from "@/components/auth/role-gate";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {FormSuccess} from "@/components/form-success";
import {Button} from "@/components/ui/button";
import {admin} from "@/actions/admin";

const AdminPage = () => {
    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((res) => {
                if (res.ok) {
                    toast.success("Allowed API Route!");
                } else {
                    toast.error("Forbidden API Route!");
                }
            })
    };

    const onServerActionClick = async () => {
        const res = await admin();
        if (res.error) {
            toast.error("Forbidden Server Action!");
        } else {
            toast.success("Allowed Server Action!");
        }
    };

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">🔑 Admin</p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRoles={UserRole.ADMIN}>
                    <FormSuccess
                        message="You are allowed to see this content!"
                    />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin-only API Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin-only Server Actions
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminPage;
