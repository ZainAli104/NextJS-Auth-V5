"use client";

import React from "react";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import {Header} from "@/components/auth/header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = (
    {
        children,
        headerLabel,
        backButtonLabel,
        backButtonHref,
        showSocial = true
    }: CardWrapperProps
) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            {children}
        </Card>
    );
};