import React from 'react';
import { rest } from 'msw';
import Advice from '@/components/Advice';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const MOCKDATA = {
  slip: {
    id: 117,
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  },
};

export default {
  title: 'Advice',
  component: Advice,
  parameters: {
    msw: [
      rest.get('https://api.adviceslip.com/advice', (_, res, ctx) => {
        return res(ctx.json(MOCKDATA));
      }),
    ],
  },
} as ComponentMeta<typeof Advice>;

const Template: ComponentStory<typeof Advice> = (args) => <Advice {...args} />;

export const Default = Template.bind({});
Default.storyName = '기본화면';

export const Loading = Template.bind({});
Loading.storyName = '로딩화면';
Loading.parameters = {
  msw: [rest.get('https://api.adviceslip.com/advice', (_, res, ctx) => res(ctx.delay('infinite')))],
};

export const Error = Template.bind({});
Error.storyName = '에러화면';
Error.parameters = {
  msw: [rest.get('https://api.adviceslip.com/advice', (_, res, ctx) => res(ctx.status(500)))],
};
