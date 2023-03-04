export default interface HackmdNote {
  shortId: string
  title: string
  type: string
  tags: string[]
  description: string
  image: string
  content: string
  createdAt: number
  lastChangedAt: number
}
