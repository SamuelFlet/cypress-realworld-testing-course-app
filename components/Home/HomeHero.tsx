import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { CheckIcon } from "@heroicons/react/outline"
import Subscribe from "../Subscribe"

const features = [
  {
    name: "4 Courses",
    description: "",
  },
  {
    name: "25+ Lessons",
    description: "",
  },
  {
    name: "Free and Open Source",
    description: "",
  },
]

type Inputs = {
  email: string
}

export default function HomeHero() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<Inputs>()

  const [isSubmitted, setIsSubmitted] = React.useState("")

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event.target.reset()

    const subscribe = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const response = await subscribe.json()

    setIsSubmitted(response.message)
  }

  return (
    <div className="">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1
                      data-test="hero-heading"
                      className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                    >
                      <span className="block text-gray-900">
                        Testing Next.js Applications with Cypress
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>

                    {/* Features */}
                    <div className="mt-12">
                      <dl className="">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative mb-6">
                            <dt>
                              <CheckIcon
                                className="absolute w-6 h-6 text-blue-500"
                                aria-hidden="true"
                              />
                              <p className="text-lg font-medium leading-6 text-gray-500 ml-9">
                                {feature.name}
                              </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 ml-9">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-10 sm:mt-12">
                      <Subscribe />
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
