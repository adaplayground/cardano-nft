import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'react-bootstrap';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Primary</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
