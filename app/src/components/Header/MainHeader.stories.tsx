import type { ComponentStory, ComponentMeta } from '@storybook/react'
import MainHeader from './MainHeader'
import MainHeaderProps from './MainHeader.type'

export default {
  title: 'MainHeader',
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>

const Template: ComponentStory<typeof MainHeader> = (args: MainHeaderProps) => <MainHeader {...args} />

export const Default: ComponentStory<typeof MainHeader> = Template.bind({})

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
]

Default.args = {
  title: 'Blog',
  sections: sections,
}

Default.storyName = 'デフォルト'
