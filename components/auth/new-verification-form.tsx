"use client";

import {useCallback, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {BeatLoader} from "react-spinners";

import {CardWrapper} from "@/components/auth/card-wrapper";
import {newVerificationToken} from "@/actions/new-verification-form";
import {FormSuccess} from "@/components/form-success";
import {FormError} from "@/components/form-error";

export const NewVerificationForm = () => {
    const [success, setSuccess] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Token is missing!");
            return;
        }

        newVerificationToken(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError("Something went wrong!");
            });
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirm your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader/>
                )}
                <FormSuccess message={success}/>
                <FormError message={error}/>
            </div>
        </CardWrapper>
    );
};
