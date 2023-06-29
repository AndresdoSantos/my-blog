'use client'

/** type Props = {
  likes: number
  slug: string
} */

export function Like() {
  /** const [isLoading, setIsLoading] = useState(false)
  const [numbersOfLikes, setNumbersOfLikes] = useState(likes)

  const handleLikePost = useCallback(async () => {
    setIsLoading(true)

    await client
      .mutate({
        variables: { slug, likes: likes + 1 },
        update: (cache, { data }) => {
          const test = cache.readQuery({
            query: GET_POST_BY_SLUG_QUERY,
            variables: { slug },
          })

          console.log('test', test)
          // console.log('data', data)
        },
        mutation: UPDATE_LIKE_NUMBERS_MUTATION,
      })
      .catch((error) => {
        console.log(JSON.stringify(error, null, 2))
      })
      .finally(() => {
        setIsLoading(false)
        setNumbersOfLikes(likes + 1)
      })
  }, [slug, likes]) */

  return (
    <>
      {/** <button
        className="flex items-center gap-x-2 relative"
        onClick={handleLikePost}
      >
        <ThumbsUp />
        <span
          className={clsx('text-zinc-700 text-xs font-medium mt-0.5', {
            'opacity-0': isLoading,
            'opacity-100': !isLoading,
          })}
        >
          {numbersOfLikes}
        </span>

        <span
          className={clsx(
            'absolute transition-all duration-300 py-1 px-2 bg-zinc-100 rounded-full text-[9px] font-bold',
            {
              'opacity-100 translate-x-5': isLoading,
              'opacity-0 translate-x-0': !isLoading,
            },
          )}
        >
          +1
        </span>
      </button> */}
    </>
  )
}
