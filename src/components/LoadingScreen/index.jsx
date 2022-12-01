import BounceLoader from "react-spinners/BounceLoader"

export default function Loading({ loading }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BounceLoader color="#36d7b7" loading={loading} />
    </div>
  )
}
