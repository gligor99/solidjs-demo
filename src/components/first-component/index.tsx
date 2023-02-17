interface Props {
  name: string
}

export const FirstComponent = (props: Props) => {
  return (
    <div class="pt-5 font-semibold text-2xl italic">
      Hello, world! {props.name}{' '}
    </div>
  )
}
