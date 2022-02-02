import Dialogue from '../components/Dialogue/Dialogue';

export const basic = ({ isOpen, loading, title }) => {
  return (
    <Dialogue
      isOpen={isOpen}
      title={title}
      loading={loading}
      onClose={() => window.alert('Simulate close')}
      onConfirm={() => window.alert('Simulate confirm')}
    />
  );
};

export default {
  component: Dialogue,
  argTypes: {
    isOpen: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    title: {
      defaultValue: 'Are you absolutely certain you wanna nuke all SUVs?',
    },
    width: {
      control: { disable: true },
    },
  },
}