import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import Layout from "../../components/Layouts/Layout"
import { useState } from "react"
import PasswordRecup from "../../components/PasswordRecup/PasswordRecup"
import Signup from "../../components/Signup/Signup"
import { logIn } from "../../services/api/auth"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const [login, setLogin] = useState(true)
  const navigate = useNavigate()

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = async (event: any) => {
      event.preventDefault()
      const response: any = await logIn({email, password})
      if (response.status === true) {
        navigate("/home")
      }
  }


  const [components, setComponents] = useState(true)

  const switchComponent = () => {
    setLogin(false)
  }

  const switchComponentTest = () => {
    setLogin(false)
    setComponents(false)
  }

  return (
    <>

      {
        login ? (

          <Layout>
            <div className="flex flex-col items-center max-w-md mx-auto">
              <form className="flex flex-col gap-4 w-full mb-5">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Votre email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="name@gmail.com"
                    required
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Votre mot de passe"
                    />
                  </div>
                  <TextInput
                    id="password1"
                    required
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <a onClick={switchComponent} href="#" className="text-gray-400 hover:text-cyan-600">Mot de passe oublié</a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Label htmlFor="remember">
                    Se souvenir de moi
                  </Label>
                  <Checkbox id="remember" />
                </div> */}
                  <Button
                  onClick={(event) => handleSubmit(event)}
                  className="w-6/12">
                    Connexion
                  </Button>
              </form>
              <section>
                <span className="ml-3">Première fois?&ensp;Inscrivez-vous</span>
                <a onClick={switchComponentTest} href="#" className="text-cyan-600 hover:text-gray-400 cursor-pointer">
                  &ensp;ICI&ensp;
                </a>
              </section>
            </div>
          </Layout>
        ) : (
          components ? (
            <Layout>
              <div className="flex flex-col items-center max-w-md mx-auto">
                <PasswordRecup />
              </div>
            </Layout>
          ) : (
            <Layout>
              <div className="flex flex-col items-center max-w-md mx-auto">
                <Signup />
              </div>
            </Layout>
          )
        )
      }
    </>
  )
}
export default Login