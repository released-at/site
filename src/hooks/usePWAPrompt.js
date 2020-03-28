import { useState, useEffect } from 'react'

function useAddToHomescreenPrompt() {
  const [prompt, setState] = useState(null)

  const promptToInstall = () => {
    console.log(prompt)
    if (prompt) {
      return prompt.prompt()
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event',
      ),
    )
  }

  useEffect(() => {
    const ready = e => {
      e.preventDefault()
      setState(e)
    }

    window.addEventListener('beforeinstallprompt', ready)

    return () => {
      window.removeEventListener('beforeinstallprompt', ready)
    }
  }, [])

  return [prompt, promptToInstall]
}

export default useAddToHomescreenPrompt