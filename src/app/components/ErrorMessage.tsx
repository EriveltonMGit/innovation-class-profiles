type Props = {
    message: string
  }
  
  export default function ErrorMessage({ message }: Props) {
    return (
      <p className="mt-4 text-red-500 font-semibold">{message}</p>
    )
  }
  