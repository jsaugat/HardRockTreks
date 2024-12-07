export const GridSkeleton = ({ count }: { count?: number }) => {
  // Create an array of 3-6 skeleton items to match potential grid layouts
  const skeletonItems = Array.from({ length: count ? count : 3 }, (_, index) => index);

  return (
    <section className="my-default animate-pulse">
      <div className="h-8 w-1/4 bg-muted-foreground/20 rounded mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {skeletonItems.map((item) => (
          <div
            key={item}
            className="relative w-full rounded-2xl aspect-square cursor-pointer overflow-hidden border bg-gray-200"
          >
            {/* Skeleton image placeholder */}
            <div className="absolute inset-0 bg-muted/20"></div>

            {/* Skeleton title */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <div className="h-6 w-1/2 bg-muted-foreground/20 rounded"></div>
            </div>

            {/* Skeleton packages count */}
            <div className="absolute top-2 left-2 w-36 h-6 bg-muted-foreground/20 rounded-full"></div>

            {/* Skeleton arrow icon */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-muted-foreground/20 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};