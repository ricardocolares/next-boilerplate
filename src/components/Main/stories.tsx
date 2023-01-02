import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'title basic 2',
  description: 'description basic 2',
};

export const Default: Story = (args) => <Main {...args} />;
