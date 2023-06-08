import { Story, Meta } from '@storybook/react';
import { TimedCircularProgress } from './';

export default {
  component: TimedCircularProgress,
} as Meta;

const Template: Story = (args) => <TimedCircularProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  hideCounter: false,
  counterStart: 10
};
