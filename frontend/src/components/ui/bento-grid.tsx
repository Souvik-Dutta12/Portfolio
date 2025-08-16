import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-amber-500 bg-amber-50 dark:bg-black p-4 transition duration-300 hover:shadow-xl dark:border-white/[0.2]  dark:shadow-none",
                className,
            )}
        >
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {icon}
                <div className="mt-2 mb-2 font-sans text-2xl font-bold text-amber-500 dark:text-white">
                    {title}
                </div>
                <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
