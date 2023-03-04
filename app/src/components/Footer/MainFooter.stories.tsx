import type { ComponentStory, ComponentMeta } from '@storybook/react'
import MainFooter from './MainFooter'
import MainFooterProps from './MainFooter.type'

export default {
  title: 'MainFooter',
  component: MainFooter,
} as ComponentMeta<typeof MainFooter>

const Template: ComponentStory<typeof MainFooter> = (args: MainFooterProps) => <MainFooter {...args} />

export const Default: ComponentStory<typeof MainFooter> = Template.bind({})

Default.args = {
  title: 'Footer',
  description: 'Something here to give the footer a purpose!',
}

Default.storyName = 'デフォルト'
