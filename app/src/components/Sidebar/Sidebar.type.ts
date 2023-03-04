export default interface SidebarProps {
  archives: ReadonlyArray<{
    url: string
    title: string
  }>
  description: string
  social: ReadonlyArray<{
    icon: React.ElementType
    name: string
    url: string
  }>
  title: string
}
