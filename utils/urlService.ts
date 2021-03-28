interface UrlServiceRequest {
  page: string | string[]
  search?: string
}

export const UrlService = {
  execute({ page, search }: UrlServiceRequest): string {
    return(`${search !== '' ? `?search[name]=${search}` : ''}` + `${search !== '' ? '&' : '?'}page=${page}`)
  }
}
