import type { ComponentStory, ComponentMeta } from '@storybook/react'
import FeaturedPostCard from './FeaturedPostCard'
import HackmdNote from '@components/HackmdNote.type'

interface FeaturedPostCardProps {
  post: HackmdNote
}

export default {
  title: 'FeaturedPostCard',
  component: FeaturedPostCard,
} as ComponentMeta<typeof FeaturedPostCard>

const Template: ComponentStory<typeof FeaturedPostCard> = (args: FeaturedPostCardProps) => (
  <FeaturedPostCard {...args} />
)

export const Default: ComponentStory<typeof FeaturedPostCard> = Template.bind({})

Default.args = {
  post: {
    shortId: 'test',
    title: 'Hello World',
    type: 'public',
    tags: ['a', 'a'],
    description: 'こんにちは',
    image: 'https://source.unsplash.com/random',
    content: '',
    createdAt: 0,
    lastChangedAt: 0,
  },
}

Default.storyName = 'デフォルト'
