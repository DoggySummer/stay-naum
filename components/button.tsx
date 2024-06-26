interface ButtonProps {
  text: string
  bgBlack: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={`rounded-lg px-14 py-7 text-white ${props.bgBlack ? 'bg-black' : 'bg-background-brown'}`}>
      {props.text}
    </div>
  )
}

export default Button
