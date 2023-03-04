import type { ComponentStory, ComponentMeta } from '@storybook/react'
import Markdown from './Markdown'

export default {
  title: 'Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

const Template: ComponentStory<typeof Markdown> = (args: any) => <Markdown {...args} />

export const Default: ComponentStory<typeof Markdown> = Template.bind({})

const mdText = `# サーバー構築
###### tags: 


## 手順
1. OSのインストール
2. セキュリティの設定
3. httpサーバの設定

## OSのインストール

## セキュリティの設定

### ユーザーの追加
`

Default.args = {
  children: mdText,
}

Default.storyName = 'デフォルト'
