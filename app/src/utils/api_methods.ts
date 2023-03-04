export const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
    },
  })
  return response.json()
}

export const getNotes = async (url: string) => {
  const json = await get(url)
  const notes = json.map((note: any) => {
    note.tags.map((tag: string) => {
      if (tag.match(/^__img_/)) {
        note.image = tag.replace(/^__img_/, '')
      } else if (tag.match(/^__dsc_/)) {
        note.description = tag.replace(/^__dsc_/, '')
      }
    })
    return {
      id: note.id,
      title: note.title,
      description: note.description,
      image: note.image,
      content: note.content,
    }
  })
  return notes
}

export const post = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response
}

export const put = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response
}

export const del = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response
}
