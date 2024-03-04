import CustomersList from "@/app/dashboard/ui/customers-list";
import UsersList from "@/app/dashboard/ui/users-list";
import {Suspense} from "react";

export default async function Customer() {
    return (
        <div className="flex flex-row gap-2">
            <Suspense fallback={<div>Loading...</div>}>
                <CustomersList />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersList />
            </Suspense>
        </div>
    );
};
