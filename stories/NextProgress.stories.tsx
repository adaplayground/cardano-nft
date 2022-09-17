import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NextNProgress } from 'app/components/NextNProgress';


export default {
  title: 'Components/NextNProgress',
  component: NextNProgress,
} as ComponentMeta<typeof NextNProgress>;

const Template: ComponentStory<typeof NextNProgress> = args => (
  <NextNProgress {...args}>Primary</NextNProgress>
);

export const Default = Template.bind({});
Default.args = {
  height: 10,
  color:'red',
  startPosition:10,
  stopDelayMs:1000,

};
