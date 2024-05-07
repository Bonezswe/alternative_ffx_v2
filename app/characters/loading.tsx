import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="grid lg:grid-cols-2 gap-4 mx-12">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative hover:shadow-xl duration-500 ease-in-out">
                <Skeleton className="min-h-[500px] min-w-[350px] rounded-xl flex flex-col space-y-1.5 p-6" />
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative hover:shadow-xl duration-500 ease-in-out">
                <Skeleton className="min-h-[500px] min-w-[350px] rounded-xl flex flex-col space-y-1.5 p-6" />
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative hover:shadow-xl duration-500 ease-in-out">
                <Skeleton className="min-h-[500px] min-w-[350px] rounded-xl flex flex-col space-y-1.5 p-6" />
            </div>
        </div>
    )
}