import Head from "next/head"
import Image from "next/image"
import { Box, Heading, Paragraph } from "@dracula/dracula-ui"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + TailwindCSS + Dracula UI</title>
      </Head>
      <div className="grid place-items-center h-screen w-screen">
        <Box
          color="yellowPink"
          className="group text-center p-4 border rounded-xl shadow-sm shadow-cyan-300 hover:shadow-lg hover:shadow-cyan-300 transition-shadow"
        >
          <Image
            src="/dracula.webp"
            width="128"
            height="128"
            quality="90"
            className="group-hover:scale-75 transition-transform"
          />
          <Heading color="black" weight="bold">
            Hello Vampires
          </Heading>
          <Paragraph color="black">This should get you started with</Paragraph>
          <Paragraph color="blackSecondary">
            Next.js + TailwindCSS + Dracula UI.
          </Paragraph>
        </Box>
      </div>
    </>
  )
}
