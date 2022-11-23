export default function Spinner() {
  return (
    <div className="grid place-content-center">
      <div className="flex items-center gap-2 text-gray-500">
        <span className="h-6 w-6 block rounded-full border-4 border-t-primary animate-spin" />
        loading...
      </div>
    </div>
  )
}
