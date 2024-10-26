import { useSelector } from "react-redux"

const WelkomeComponent = () => {
  const { formSlice } = useSelector((store: any) => store)

  return (
    <div>
      {formSlice.login + formSlice.password === 2 ? (
        <span>Ласкаво просимо</span>
      ) : (
        <span>Помилка!</span>
      )}
    </div>
  )
}

export default WelkomeComponent
