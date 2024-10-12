import { getPlaiceholder } from "plaiceholder"

export async function generateBlurDataURL(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const { base64 } = await getPlaiceholder(Buffer.from(buffer), {
      format: ["webp"],
    })

    console.log(`'${imageUrl}' base64: ${base64}`)

    return base64
  } catch (e) {
    if (e instanceof Error) console.error(e.stack)
  }
}

export async function addBlurDataURL<T>({
  arr,
  key,
  baseURL = process.env.NEXT_PUBLIC_SITE_URL,
}: {
  arr: Array<T>
  key: keyof T
  baseURL?: string
}) {
  // Make all requests at once instead of awaiting each one avoiding waterfall
  const base64Promises = arr.map((photo) => generateBlurDataURL(`${baseURL}${photo[key]}`))

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises)

  return arr.map((photo, i) => {
    return {
      ...photo,
      blurDataUrl: base64Results[i],
    }
  })
}
