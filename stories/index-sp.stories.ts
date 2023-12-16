import { html, TemplateResult } from 'lit';
import '../src/index-sp.js';

export default {
  title: 'IndexSp',
  component: 'index-sp',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <index-sp
    style="--index-sp-background-color: ${backgroundColor}"
    .header=${header}
  ></index-sp>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
