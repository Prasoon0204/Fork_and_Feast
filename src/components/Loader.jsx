const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-5">
        <div className="w-24 h-24 border-4 border-l-amber-600 rounded-full animate-spin"></div>
        <div className="absolute text-xl text-amber-700 animate-pulse">Loading</div>
    </div>
  )
}

export default Loader