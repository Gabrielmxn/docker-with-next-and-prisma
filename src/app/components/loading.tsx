export function Loading() {
  return (
    <div className="z-50 absolute top-0 right-0 w-full h-full bg-blue-950">
      <div className="flex w-full h-full justify-center items-center">
        <div className="size-16 rounded-full border border-r-0 border-t-0 animate-spin border-blue-500"></div>
      </div>
    </div>
  )
}