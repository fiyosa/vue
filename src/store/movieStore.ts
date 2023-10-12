import { ActionContext } from 'vuex'

type IContex = ActionContext<IMovie, IMovie>

interface IMovie {
  movies: {
    page: number
    data: {
      Title: string
      Year: string
      imdbID: string
      Type: string
      Poster: string
    }[]
  }
}

const fetchGetMovie = async (page: number) => {
  const getMovie = await fetch(`https://www.omdbapi.com/?apikey=dca61bcc&s=avengers&page=${page}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
    },
  })
  const resMovie = await getMovie.json()
  if (getMovie.status !== 200) return []
  return resMovie?.Search ?? []
}

export const movieStoreState: IMovie = {
  movies: {
    page: 1,
    data: [],
  },
}

export const movieStoreAction = {
  async previous(contex: IContex) {
    let page = contex.state.movies.page - 1
    page = page < 1 ? 1 : page
    contex.state.movies = {
      ...contex.state.movies,
      page,
    }
    const getMovie = await fetchGetMovie(page)
    contex.state.movies = {
      ...contex.state.movies,
      data: getMovie,
    }
  },

  async next(contex: IContex) {
    const page = contex.state.movies.page + 1
    contex.state.movies = {
      ...contex.state.movies,
      page,
    }
    const getMovie = await fetchGetMovie(page)
    contex.state.movies = {
      ...contex.state.movies,
      data: getMovie,
    }
  },
}
