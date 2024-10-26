import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { updateFormState } from "../../fetures/form-slice"

interface IFormFields {
  login: number
  password: number
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>()

  const dispatch = useDispatch()

  const sendData = (data: IFormFields) => {
    dispatch(updateFormState(data))
  }

  return (
    <form
      onSubmit={handleSubmit(sendData)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "150px",
      }}
    >
      <input
        type="number"
        placeholder="login"
        {...register("login", {
          required: "login shouldn't be empty",
        })}
      />
      {errors.login && <span>{errors.login.message}</span>}
      <input
        type="number"
        placeholder="password"
        {...register("password", {
          required: "password shouldn't be empty",
        })}
      />
      {errors.login && <span>{errors.login.message}</span>}
      <input type="submit" value="send the data" />
    </form>
  )
}

export default Form
