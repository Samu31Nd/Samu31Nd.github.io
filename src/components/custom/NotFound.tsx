
export const NotFound = () => {
    return (
        <div className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
            <div className="space-y-8 sm:space-y-10">
                <div className="space-y-3 flex flex-col items-center justify-center">

                    <h1 className="text-4xl font-mono tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">Not Found!</h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-6">
                <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
                    This site is under construction, please be patient
                </p>
            </div>
        </div>
    )
};