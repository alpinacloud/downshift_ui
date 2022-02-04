import { useState } from 'react';
import Card, { CardContent } from '../components/Card/Card';
import Alert from '../components/Alert/Alert';
import FormControl from '../components/FormControl/FormControl';
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';
import Input from '../components/Input/Input';

export const basic = ({}) => {
  const [errorExample, setErrorExample] = useState(false);

  return (
    <Card>
      <CardContent contrast style={{maxWidth: 320}}>
        <FormControl
          label="Name"
          error={errorExample ? 'You are not allowed to click on this field' : ''}
          size="lg"
        >
          <Input
            inputSize="lg"
            placeholder="Input placeholder"
          />
        </FormControl>
        
        <FormControl label="Last name" error={null}>
          <Input placeholder="This input is always valid" />
        </FormControl>

        <FormControl label="Select profession" error="This field is always invalid">
          <Select>
            <option value="opt1">Traveler</option>
            <option value="opt2">Hole digger</option>
          </Select>
        </FormControl>
        
        <FormControl error={errorExample ? 'You are not allowed to click on this field' : ''}>
          <Input
            placeholder="This input has no label"
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <Button onClick={() => setErrorExample(true)}>Cause more errors</Button>
      </CardContent>
    </Card>
  );
};

export default {
  component: Alert,
  argTypes: {
    
  },
};